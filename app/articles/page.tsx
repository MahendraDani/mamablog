// articles, categories and searchin
import { articles } from "#site/content";
import { ArticleCard } from "@/components/article-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  const articlesByCategory = articles.reduce((acc, article) => {
    const category = article.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, typeof articles>);

  return (
    <div className="px-12">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl">Categories</h1>
        <div>
          <input placeholder="searchbar" className="bg-secondary" />
        </div>
      </div>
      <Separator className="my-4 bg-black/20" />
      <div className="space-y-8">
        {Object.entries(articlesByCategory).map(
          ([category, categoryArticles]) => (
            <div key={category} className="mb-8">
              <h2 className="sm:text-xl font-semibold mb-4">{category}</h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-start items-center">
                {categoryArticles.map((article, idx) => (
                  <ArticleCard key={idx} article={article} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
