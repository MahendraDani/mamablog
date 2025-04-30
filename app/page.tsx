import { getAllArticles } from "@/lib/data";
import { HomePageClient } from "./page-client";
import { Footer } from "@/components/footer";

export default function Home() {
  const articles = getAllArticles();
  return (
    <div>
      <HomePageClient articles={articles}/>
      <Footer/>
    </div>
    
  )
}
