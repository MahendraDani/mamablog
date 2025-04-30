"use client";
import { Blog } from "#site/content";
import { ArticleCard } from "@/components/article-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const ArticlePageClient = ({ articles }: { articles: Blog[] }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <SearchArticles articles={articles} />
    </Suspense>
  );
};

function SearchArticles({ articles }: { articles: Blog[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("search") ?? "";

  const filteredArticles =
    search === ""
      ? articles
      : articles.filter((article) =>
          article.title.toLowerCase().includes(search.toLowerCase())
        );

  const articlesByCategory = filteredArticles.reduce((acc, article) => {
    const category = article.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    // Repeat the article three times
    acc[category].push(article, article, article);
    return acc;
  }, {} as Record<string, typeof articles>);
  return (
    <div className="px-6 sm:px-12">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl">Categories</h1>
        <div>
          <Input
            placeholder="search here"
            onChange={(e) => {
              let query = e.target.value;
              if (query.length > 0) {
                query = query.toLowerCase();

                router.push(`/articles?search=${encodeURIComponent(query)}`);
              } else {
                router.push(`/articles`);
              }
            }}
            value={search}
            name="search"
            className="rounded-none sm:w-64"
          />
        </div>
      </div>
      <Separator className="my-4 bg-black/20" />
      <div className="space-y-8">
        {Object.keys(articlesByCategory).length > 0 ? (
          Object.entries(articlesByCategory).map(
            ([category, categoryArticles]) => (
              <div key={category} className="mb-8 ">
                <h2 className="sm:text-xl font-semibold mb-4">{category}</h2>
                <Carousel className="w-full relative" opts={{ align: "start" }}>
                  <CarouselContent>
                    {categoryArticles.map((article, idx) => (
                      <CarouselItem
                        key={idx}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <ArticleCard article={article} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute -top-6 right-12 flex flex-row justify-start items-center">
                      <CarouselPrevious className="rounded-none bg-black text-white hover:bg-black hover:text-white disabled:bg-background disabled:text-black cursor-pointer ml-4" />
                      <CarouselNext className="rounded-none bg-black text-white hover:bg-black hover:text-white disabled:bg-background disabled:text-black cursor-pointer" />
                  </div>
                </Carousel>
              </div>
            )
          )
        ) : (
          <div className="text-xl">
            <span>{"Oops! No articles found that contain the keyword "}</span>
            <span className="font-bold italic">{`${search} . `}</span>
            <span>{"Try searching for something else."}</span>
          </div>
        )}
      </div>
    </div>
  );
}
