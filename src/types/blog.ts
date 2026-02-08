export interface BlogMetadata {
    title?: string;
    description?: string;
    date?: string;
    author?: string;
    image?: string;
    [key: string]: unknown;
}

export interface BlogPost {
    slug: string;
    metadata: BlogMetadata;
    content: string;
}
