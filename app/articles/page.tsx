import { articles } from "#site/content";
import { ArticlePageClient } from "./page-client";

export default function Articles() {
  return <ArticlePageClient articles={articles}/>
}
