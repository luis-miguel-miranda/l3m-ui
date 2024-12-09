import { Header }  from "../components/BannerMain";
import ArticleTable  from "../components/ArticleTable";
import { Articles } from "../api/articles";


export default async function Home() {
  return (
    <main>
      <Header/>
      <ArticleTable/>
    </main>
  )
}
