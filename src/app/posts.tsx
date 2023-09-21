import React from "react";
import { Articles, Article } from "./api/articles"
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'





export default async function Blogpost() {
  const articlesData = await getArticleData()
  // Wait for the promises to resolve
  const [articles] = await Promise.all<Articles>([articlesData])
 
  return (
    <main>
      <div className="flex flex-col items-center gap-[97px] relative">
      <div className="flex w-[693.58px] items-center justify-center gap-[10px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] ml-[-62.21px] mr-[-62.21px] [font-family:'Noto_IKEA_Latin-Regular',Helvetica] font-normal text-[#111111] text-[120px] text-center tracking-[-4.80px] leading-[180.0px] whitespace-nowrap">
          JOURNEY LOGS
        </div>
      </div>
      <div className="flex flex-wrap h-[1000px] items-center justify-center gap-[50px_50px] px-0 py-[50px] relative self-stretch w-full">
      {/* @ts-expect-error Server Component */}
      <ArticleList promise={articles}></ArticleList>
      </div>
      <div className="relative w-[445.47px] h-[62px]">
        <div className="relative w-[441px] h-[62px] bg-[#181818]">
          <div className="absolute w-[299px] top-[11px] left-[54px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[17px] text-center tracking-[1.70px] leading-[39.9px]">
            CHECK ALL
          </div>
          <div className="absolute w-[15px] top-[20px] left-[372px] [font-family:'Noto_IKEA_Latin-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[1.00px] leading-[23.5px]">
            
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

// Get Article Data
async function getArticleData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=*`,
   { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  //console.log(res.json())
  return res.json()
}

// Article List Component
 async function ArticleList({ promise }: { promise: Promise<Articles> }){
   // Wait for the albums promise to resolve
   const articles= await promise
   return (
    <main>
      {articles.data.map((article) => (
        <div key= {article.id} className="relative w-[700px] h-[500px]">
        <img className="absolute w-[700px] h-[463px] top-0 left-0 object-cover" alt="Rectangle" src={article.attributes.bannerPicture.data.attributes.url} />
        <div className="absolute w-[304px] top-[474px] left-[396px] [font-family:'Noto_IKEA_Latin-Bold',Helvetica] font-bold text-[#2e2e2e] text-[26px] text-right tracking-[0] leading-[27px] whitespace-nowrap">
        <Link href={`/articles/${article.id}`}>{article.attributes.articleTitle}</Link>
        </div>
      </div>   
      ))}
    </main>
   )
 }
 