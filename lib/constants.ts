export interface Source {
    name: string;
    url: string;
}

export interface Post {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: Source;
}

export interface NewsResponse {
    articles: Post [];
    totalArticles:number;
}

