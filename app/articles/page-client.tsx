import { Blog } from "#site/content";
import { ArticleCard } from "@/components/article-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export const ArticlePageClient = ({articles} : {articles : Blog[]})=>{
  const articlesByCategory = articles.reduce((acc, article) => {
      const category = article.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      // Repeat the article three times
      acc[category].push(article, article, article);
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
              <CarouselNext className="absolute -top-6 right-6 rounded-none bg-black text-white hover:bg-black hover:text-white disabled:bg-background disabled:text-black cursor-pointer" />
              <CarouselPrevious className="absolute -top-6 left-[87vw] rounded-none bg-black text-white hover:bg-black disabled:bg-background hover:text-white cursor-pointer disabled:text-black" />
            </Carousel>
          </div>
        )
      )}
    </div>
  </div>
  )
}