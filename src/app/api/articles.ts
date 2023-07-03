export interface Articles {
    data: Article[];
    meta: Meta;
}

export interface Article {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    body:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    articleTitle: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
