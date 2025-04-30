import { getAllArticles } from "@/lib/data";
import { HomePageClient } from "./page-client";

export default function Home() {
  const articles = getAllArticles();
  return <HomePageClient articles={articles}/>
}
