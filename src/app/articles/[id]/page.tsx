import { Root, Article } from "..//..//api/article"
import ReactMarkdown from 'react-markdown'
import { useParams } from 'next/navigation'
import RootLayout from "../layout";

export default async function Page({ params }: { params: { id: string } }) {
  const pageID = params.id
  const articleData = await getArticleData(pageID)
  // Wait for the promises to resolve
  const [articles] = await Promise.all<Root>([articleData]) 
  return (
    <main className="mx-auto w-5/6">
      <div>Article List</div>
      {/* @ts-expect-error Server Component */}
      <ArticleList promise={articles}></ArticleList>
    </main>
  )
}

// Get Article Data
async function getArticleData(pageID: String) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles/${pageID}`,
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
 async function ArticleList({ promise }: { promise: Promise<Root> }){
   // Wait for the albums promise to resolve
   const root= await promise
   return (
    <main>     
        <div key={root.data.id} className="bg-base-200">
        <div className="text-xl font-medium">
          {root.data.attributes.articleTitle}
        </div>
        <div className=""> 
        <ReactMarkdown>{root.data.attributes.body}</ReactMarkdown>
        </div>
        </div>
    </main>
   )
 }
 