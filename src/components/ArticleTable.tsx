"use client";

import React from "react";
import { Articles, Article } from "../api/articles";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getArticleData } from '../utils/articleUtils';

export default function ArticleTable({ }: { }) {
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
      {/* BLOG POST COMPONENT */}
      <div className="flex flex-col items-center gap-[97px] relative">
        {articles && <ArticleList articles={articles} />}
      </div>
    </main>
  );
}



// Article List Component (Client Component)
function ArticleList({ articles }: { articles: Articles}) {
  return (
    <main>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
        {articles.data
          .filter(article => article.status === "published")
          .map((article) => (
            <ArticleCard  key={`article_card_${article.id}`} article={article} />
          ))}
      </div>
    </main>
  );
}

function ArticleCard({ article }: { article: Article }) {

  const formattedDate = new Date(article.date_created).toLocaleString('en-GB', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }); // Format date to CEST
  const router = useRouter();

  const handlePress = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/articles/${article.id}`);
  };

  return (
    <main>
      <Card 
      isBlurred 
      className="border-none max-w-[610px]" 
      shadow="sm"         
      isHoverable
      isPressable
      onPress={handlePress}
      key={`article_table_card_${article.id}`}
      >
        <CardBody
        key={`article_table_card_body_${article.id}`}
        >
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={`${process.env.NEXT_PUBLIC_CMS_API_URL}/assets/${article.bannerPicture}`}
                width={350}
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90 text-left">{article.title}</h3>
                  <p className="text-small text-foreground/80">{formattedDate}</p>
                  <div className="flex w-full items-center justify-center">
                    <small>{article.intro}</small>
                  </div>
                  <small className="text-small mt-2">{article.author}</small>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}

