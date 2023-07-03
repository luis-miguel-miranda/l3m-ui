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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      <h1>Article List</h1>
      <ul>
      {articles.data.map((article) => (
        <div key={article.id}>
          <h2 >{article.attributes.articleTitle}</h2>
          <div>{article.attributes.body}</div>
        </div>
      ))}
      </ul>
      </div>
    </main>
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