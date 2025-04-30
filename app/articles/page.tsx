import { articles } from "#site/content";
import { Footer } from "@/components/footer";
import { ArticlePageClient } from "./page-client";

export default function Articles() {
  return (
    <div>
      <ArticlePageClient articles={articles}/>
      <Footer/>
    </div>
  )
}
