import { Article } from "../../../api/article"
import ReactMarkdown from 'react-markdown'
import { useParams } from 'next/navigation'
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default async function Page({ params }: { params: { id: string } }) {
  console.log("IN MFD")
  const pageID = params.id
  const articleData = await getArticleData(pageID)
  // Wait for the promises to resolve
  const [article] = await Promise.all<Article>([articleData]) 
  return (
    <main className="mx-auto w-5/6">
      <ArticleEntry article={article} ></ArticleEntry>
    </main>
  )
}

// Article List Component
function ArticleEntry({ article }: { article: Article} ) {
  // Wait for the albums promise to resolve
  return (
   <main>     
       <div key={article.data.id} className="bg-base-200">
       <div className="text-xl font-medium">
         {article.data.title}
       </div>
       <div className="" dangerouslySetInnerHTML={{ __html: article.data.content }}></div>
       </div>
   </main>
  )
}

// Get Article Data
async function getArticleData(pageId: String): Promise<Article> {
  try {
    const cms_url = publicRuntimeConfig.cmdApiUrl;

    const res = await fetch(`${cms_url}/items/articles/${pageId}`, { next: { revalidate: 0 } });
    console.log("Fetched from:", `${cms_url}/items/articles`); // Log the URL

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error fetching articles:", errorText); 
      throw new Error(`Failed to fetch data. Server responded with status ${res.status}: ${errorText}`);
    }

    const responseText = await res.text(); // Get the raw text response
    //console.log("Raw API response:", responseText); // Log the raw response before parsing

    // Remove any non-JSON characters from the end of the string
    //const validJsonText = responseText.slice(0, responseText.lastIndexOf('}') + 1);
    
    const data = JSON.parse(responseText);
    //console.log("Fetched articles:", data); // You can uncomment this to log the parsed data

    return data as Article;

  } catch (error) {
    console.error("Error in getArticleData:", error); 
    throw error; 
  }
}



