import { Articles, Article } from "..//api/articles"
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
    <>
      <h1>Article List</h1>
      <ul>
      {articles.data.map((article) => (
        <div key={article.id}>
          <h2 >{article.attributes.articleTitle}</h2>
          <div>{article.attributes.body}</div>
        </div>
      ))}
      </ul>
    </>
  )
}
// Albums Component
// async function Articles({ promise }: {
//   promise: Promise<Article[]>;
// }): Promise<JSX.Element> {
//   // Wait for the albums promise to resolve
//   const articles = await promise
//   return (
//     <ul>
//       {articles.map((article) => (
//         <li key={article.articleTitle}>{article.body}</li>
//       ))}
//     </ul>
//   )
// }