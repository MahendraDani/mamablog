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
import type { Blog } from "#site/content";
import { useEffect, useState } from "react";

export const HomePageClient = ({ articles }: { articles: Blog[] }) => {
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => {
        const newIdx = Math.floor(Math.random() * articles.length);
        return newIdx === prevIdx ? (newIdx + 1) % articles.length : newIdx;
      });
    }, 3 * 1000);

    return () => clearInterval(interval);
  }, [articles.length]);

  return (
    <div className="relative flex flex-col-reverse sm:flex-col">
      <div className="relative w-[100vw] h-[83vh] sm:w-full sm:h-[93vh] overflow-hidden">
      <Image
        src={articles[idx].image}
        alt="Blog Image"
        fill
        className="object-cover w-full h-full"
      />
      </div>
      <h3 className="hidden sm:block absolute top-12 left-12 text-5xl font-bold text-white bg-black/50 px-4 py-2 backdrop-blur-sm w-[40rem] text-pretty">
          {articles[idx].title}
      </h3>
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 sm:absolute mx-auto sm:-right-10 sm:bottom-1 w-[90vw] sm:w-[25rem] h-[20rem] p-0 flex justify-center items-start bg-black/50 text-white border-none backdrop-blur-sm">
      <CardContent className="px-4">
        <div className="flex flex-row justify-start items-center gap-4 text-sm text-white/80">
        <p>
          <span>{"#"}</span>
          {articles[idx].category}
        </p>
        <div className="flex flex-row justify-start items-center gap-1">
          <BookOpenCheck className="h-3 w-3 " />
          <p className="inline-flex flex-row items-center text-white/80">{`${articles[idx].metadata.readingTime} mins`}</p>
        </div>
        </div>
        <CardTitle className="pt-2 text-xl sm:text-2xl">
        {articles[idx].title}
        </CardTitle>
        <CardDescription className="pt-2 text-pretty w-full line-clamp-3 text-white/80">
        {articles[idx].excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="rounded-none bg-accent text-black hover:bg-accent/80">
        <Link href={`/articles/${articles[idx].slugAsParams}`}>
          Read More
        </Link>
        </Button>
      </CardFooter>
      </Card>
    </div>
  );
};
