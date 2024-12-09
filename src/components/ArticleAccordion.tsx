"use client";

import { Accordion, AccordionItem} from "@nextui-org/accordion";
import { Articles, Article } from "../api/articles";
import Link from 'next/link';

export default function ArticleList({ articles , domain}: { articles: Articles , domain: string}) {

  return (
    <div className="w-full"> {/* Ensure the parent container is full width */}
    <Accordion 
      variant="light"
      selectionMode="multiple"
      showDivider={true}
      fullWidth={true}
      className="w-full" // Ensure the Accordion itself is full width
    >
      {articles.data.map((article) => (
        <AccordionItem
          key={`article_accordion_item_${article.id}`}
          aria-label={article.title}
          subtitle={`Published on ${new Date(article.date_created).toLocaleString('en-GB', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}`} // Format date to CEST
          title={article.title}
        >
          <div className="p-4 space-y-4">
            <p>{article.intro}</p>
            <Link 
              href={`${domain}/articles/${article.id}`}
              className="text-blue-500 hover:underline"
            >
              Read Further
            </Link>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  );
}