import { useCallback, useState } from "react";

const STORAGE_KEY = "blog-read-posts";

function loadReadSlugs(): string[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
        return [];
    }
}

export function useReadPosts() {
    const [readSlugs, setReadSlugs] = useState<string[]>(loadReadSlugs);

    const isRead = useCallback(
        (slug: string) => readSlugs.includes(slug),
        [readSlugs]
    );

    const markAsRead = useCallback((slug: string) => {
        setReadSlugs((prev) => {
            if (prev.includes(slug)) return prev;
            const next = [...prev, slug];
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch {
                // ignore
            }
            return next;
        });
    }, []);

    return { isRead, markAsRead };
}