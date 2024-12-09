export interface Articles {
    data: Article[];
}

export interface Article {
    content: string
    date_created: string
    date_updated: string
    //publishedAt: string
    title: string
    intro:  string
    bannerPicture: string
    status: string
    id: string
    sort: string
    user_created: string
    user_updated: string
    author: string
    authorPic: string
}
  
  // export interface Attributes {
  //   content: string
  //   date_created: string
  //   date_updated: string
  //   //publishedAt: string
  //   title: string
  //   bannerPicture: string
  //   status: string
  //   id: string
  //   sort: string
  //   user_created: string
  //   user_updated: string
  // }
  
  // export interface BannerPicture {
  //   data: Data
  // }
  
  // export interface Data {
  //   id: number
  //   attributes: Attributes2
  // }
  
  // export interface Attributes2 {
  //   name: string
  //   alternativeText: any
  //   caption: any
  //   width: number
  //   height: number
  //   formats: Formats
  //   hash: string
  //   ext: string
  //   mime: string
  //   size: number
  //   url: string
  //   previewUrl: any
  //   provider: string
  //   provider_metadata: any
  //   createdAt: string
  //   updatedAt: string
  // }
  
  // export interface Formats {
  //   small?: Small
  //   medium?: Medium
  //   thumbnail: Thumbnail
  // }
  
  // export interface Small {
  //   ext: string
  //   url: string
  //   hash: string
  //   mime: string
  //   name: string
  //   path: any
  //   size: number
  //   width: number
  //   height: number
  // }
  
  // export interface Medium {
  //   ext: string
  //   url: string
  //   hash: string
  //   mime: string
  //   name: string
  //   path: any
  //   size: number
  //   width: number
  //   height: number
  // }
  
  // export interface Thumbnail {
  //   ext: string
  //   url: string
  //   hash: string
  //   mime: string
  //   name: string
  //   path: any
  //   size: number
  //   width: number
  //   height: number
  // }
  
  // export interface Meta {
  //   pagination: Pagination
  // }
  
  // export interface Pagination {
  //   page: number
  //   pageSize: number
  //   pageCount: number
  //   total: number
  // }
  