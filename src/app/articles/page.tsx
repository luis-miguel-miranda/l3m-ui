import { Articles, Article } from "..//api/articles"
import ReactMarkdown from 'react-markdown'
import RootLayout from "../layout";
import Link from 'next/link'


export default async function Page() {
  const articlesData = await getArticleData()
  // Wait for the promises to resolve
  const [articles] = await Promise.all<Articles>([articlesData])
 
  return (
    <main className="mx-auto w-5/6">
      <div>Article List</div>
      {/* @ts-expect-error Server Component */}
      <ArticleList promise={articles}></ArticleList>
    </main>
  )
}

// Get Article Data
async function getArticleData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`,
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
        <div key={article.id} className="bg-base-200">
        <div className="text-xl font-medium">
          {article.attributes.articleTitle}
        </div>
        <div><Link href={`/articles/${article.id}`}>Read Further</Link></div>
        </div>
      ))}
    </main>
   )
 }
 