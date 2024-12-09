'use client';
import { Articles } from "../../api/articles";
import Link from 'next/link';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ArticleList from '../../components/ArticleAccordion';
import { useEffect, useState } from 'react';
import { getArticleData } from '../../utils/articleUtils';

export default function Page() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [articles, setArticles] = useState<Articles | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      const data = await getArticleData();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <main>
      <div style={{ width: '90%', margin: 'auto' }}>
        <h1>Article List</h1>
        {articles && domain ? (
          <ArticleList articles={articles} domain={domain} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}



