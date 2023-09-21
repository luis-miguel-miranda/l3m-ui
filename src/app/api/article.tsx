export interface Root {
  data: Article
  meta: Meta
}

export interface Article {
  id: number
  attributes: Attributes
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
  data: Data2
}

export interface Data2 {
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
  thumbnail: Thumbnail
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

export interface Meta {}
