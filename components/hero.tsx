"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllArticles } from "@/lib/data";
import { useEffect, useState } from "react";

export const Hero = () => {
  const articles = getAllArticles();
  const LEN = articles.length;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * LEN);
      setIdx(randomIndex);
    }, 2 * 1000);
  }, [idx]);

  return (
    <div >
      <div className="relative w-[100vw] h-[60vh] sm:w-full sm:h-[80vh] overflow-hidden">
        <Image
          src={articles[idx].image}
          alt="Blog Image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative w-[100vw] h-[60vh] sm:w-full sm:h-[80vh] overflow-hidden">
        <Card className="absolute hidden sm:bottom-0 sm:left-32 w-[25rem] h-[20rem] p-0 sm:flex justify-center items-start bg-white/70 border-none backdrop-blur-sm">
          <CardContent className="px-4">
            <div className="flex flex-row justify-start items-center gap-4 text-muted-foreground text-sm">
              <p>
                <span>{"#"}</span>
                {articles[idx].category}
              </p>
              {/* <div className="flex flex-row justify-start items-center gap-1">
                <BookOpenCheck className="h-3 w-3 " />
                <p className="inline-flex flex-row items-center">{`${articles[idx].metadata.readingTime} mins`}</p>
              </div> */}
            </div>
            <CardTitle className="pt-2 text-xl sm:text-2xl">
              {articles[idx].title}
            </CardTitle>
            <CardDescription className="pt-2 text-pretty w-full line-clamp-3">
              {articles[idx].excerpt}
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4">
            <Button className="rounded-none">
              <Link href={`/articles/${articles[idx].slugAsParams}`}>
                Read More
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
