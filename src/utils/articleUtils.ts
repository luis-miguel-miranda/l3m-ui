"use client";
import { Articles } from "../api/articles";
import { useEffect, useState } from 'react';

export async function getArticleData(limit = 6, sortOrder = '-date_created'): Promise<Articles> {
  const cms_url = process.env.NEXT_PUBLIC_CMS_API_URL;

  try {
    const query_string = `${cms_url}/items/articles?sort[]=${sortOrder}&limit=${limit}`;
    const res = await fetch(query_string);
    console.log("Fetched from:", `${query_string}`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error fetching articles:", errorText);
      throw new Error(`Failed to fetch data. Server responded with status ${res.status}: ${errorText}`);
    }

    const responseText = await res.text();
    const data = JSON.parse(responseText);
    return data as Articles;
  } catch (error) {
    console.error("Error in fetchArticles:", error);
    throw error;
  }
}