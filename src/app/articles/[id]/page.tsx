"use client";
import { Article } from "../../../api/article"
// remove ReactMarkdown import
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getArticle } from '../../../utils/articleUtils';

export default function Page({ params }: { params: { id: string } }) {
  const pageID = params.id
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const result = await getArticle(pageID);
        if (result) {
          setArticle(result as Article);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch article');
      }
    }
    fetchArticle();
  }, [pageID]);

  if (error) {
    return <div className="mx-auto w-5/6 text-error">Error: {error}</div>;
  }

  return (
    <main className="mx-auto w-5/6">
      <ArticleEntry article={article} />
    </main>
  )
}

function ArticleEntry({ article }: { article: Article | null }) {
  if (!article) {
    return <div className="flex justify-center p-4">Loading...</div>;
  }

  return (
    <article className="prose max-w-none">     
      <div className="bg-base-200 p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          {article.data.title}
        </h1>
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.data.content }}
        />
      </div>
    </article>
  )
}




