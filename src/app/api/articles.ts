export interface Articles {
    data: Article[];
    meta: Meta;
}

export interface Article {
    id:         number;
    attributes: Attributes;
}
  
  export interface Attributes {
    body: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    articleTitle: string
    bannerPicture: BannerPicture
  }
  
  export interface BannerPicture {
    data: Data
  }
  
  export interface Data {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
  }
  
  export interface Formats {
    small?: Small
    medium?: Medium
    thumbnail: Thumbnail
  }
  
  export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
  }
  
  export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
  }
  
  export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  