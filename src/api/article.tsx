export interface Article {
  data: Data
}

export interface Data {
  id: number
  status: string
  sort: any
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  title: string
  intro:  string
  content: string
  bannerPicture: string
  author: string
  authorPic: string
}
