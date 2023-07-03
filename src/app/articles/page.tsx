import { Articles, Article } from "..//api/articles"
import ReactMarkdown from 'react-markdown'

import RootLayout from "../layout";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`)
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

export default async function Page() {
  const articlesData = await getData()
  // Wait for the promises to resolve
  const [articles] = await Promise.all<Articles>([articlesData])
  return (
    <RootLayout>
      <div className="place-content-center w-5/6">
      <div>Article List</div>
      {articles.data.map((article) => (
        <div key={article.id} className="place-content-center collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            {article.attributes.articleTitle}
          </div>
          <div className="collapse-content"> 
          <ReactMarkdown>{article.attributes.body}</ReactMarkdown>
          </div>
        </div>
      ))}
      </div>
    </RootLayout>
  )
}

// Albums Component
// async function Articles({ promise }: {
//   promise: Promise<Article[]>;
// }): Promise<JSX.Element> {
//   // Wait for the albums promise to resolve
//   const articles = await promise
//   return (
//     <div>
//     {articles.data.map((article) => (
//       <div key={article.id}>
//         <h2 >{article.attributes.articleTitle}</h2>
//         <div>{article.attributes.body}</div>
//       </div>
//       )}
//     </div>
// }