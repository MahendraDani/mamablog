import { Blog } from "#site/content";
import { formatDate } from "@/lib/date";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Book, BookOpenCheck } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const ArticleCard = ({ article }: { article: Blog }) => {
  return (
    <Card className="w-[95%] sm:w-[30%] h-[30rem] p-0">
      <CardHeader className="p-0 h-64 relative -mb-2">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-row justify-start items-center gap-4 text-muted-foreground text-sm">
          <p>
            <span>{"#"}</span>{article.category}
          </p>
          <div className="flex flex-row justify-start items-center gap-1">
            <BookOpenCheck className="h-3 w-3 " />
            <p className="inline-flex flex-row items-center">{`${article.metadata.readingTime} mins`}</p>
          </div>
        </div>
        <CardTitle className="pt-2 text-xl sm:text-2xl">{article.title}</CardTitle>
        <CardDescription className="pt-2 text-pretty w-full line-clamp-3">{article.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="rounded-none">
          <Link href={`/articles/${article.slugAsParams}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
