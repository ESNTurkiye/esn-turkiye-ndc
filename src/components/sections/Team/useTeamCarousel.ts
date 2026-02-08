import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/shared/ui/carousel";

export function useTeamCarousel(api: CarouselApi | undefined) {
    const [current, setCurrent] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!api) return;

        const updateState = () => {
            setCurrent(api.selectedScrollSnap());
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        updateState();
        api.on("select", updateState);

        return () => {
            api.off("select", updateState);
        };
    }, [api]);

    const scrollPrev = () => api?.scrollPrev();
    const scrollNext = () => api?.scrollNext();
    const scrollTo = (index: number) => api?.scrollTo(index);

    return { current, canScrollPrev, canScrollNext, scrollPrev, scrollNext, scrollTo };
}
