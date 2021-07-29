export interface NewsResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      Author;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     null | string;
}

export interface Source {
    id:   null | string;
    name: string;
}

export interface Author {
    title?: string;
    first?: string;
    last?:  string;
}
