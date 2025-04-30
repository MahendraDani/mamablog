import { articles } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface ArticlePageParams {
  params: Promise<{
    slug: string;
  }>;
}

function getArticleFromParams(slug: string) {
  const article = articles.find((article) => article.slugAsParams === slug);

  if (!article) {
    return notFound();
  }
  return article;
}

export default async function BlogPage({ params }: ArticlePageParams) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }
  const blog = getArticleFromParams(slug);
  console.log(blog.linkedInURL)
  return (
    <div className="relative">
      {/* Section for the Image only */}
      <div className="relative w-[100vw] h-[65vh] sm:w-full sm:h-[80vh] overflow-hidden">
        <Image
          src={blog.image}
          alt="Blog Image"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Blog content starts */}
      <article className="relative bg-background px-4 py-4">
        <div className="flex flex-row max-w-[90%] sm:max-w-[60%] mx-auto justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-16">
            <div className="flex flex-col justify-center items-left">
              <p>Written By</p>
              <h3 className="text-xl font-semibold">{blog.author}</h3>
            </div>
            <div className="flex flex-col justify-center items-left">
              <p>Published On</p>
              <h3 className="text-xl font-semibold">{formatDate(blog.date)}</h3>
            </div>
          </div>
          <div className="hidden sm:flex flex-row justify-start items-right gap-2">
            {blog.linkedInURL && (
              <Link href={blog.linkedInURL} target="_blank">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            )}
            {blog.instagramURL && (
              <Link href={blog.instagramURL} target="_blank">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            )}
            {blog.twitterURL && (
              <Link href={blog.twitterURL} target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
            )}
            {blog.facebookURL && (
              <Link href={blog.facebookURL} target="_blank">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            )}
          </div>
        </div>
        <Separator className="my-6 max-w-[90%] sm:max-w-[60%] mx-auto"/>
        <div className="container mx-auto max-w-[90%] sm:max-w-[50%]">
          <p className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl [&:not(:first-child)]:mt-6 text-pretty py-4">
            {blog.title}
          </p>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={blog.body} />
          </div>
        </div>
      </article>
    </div>
  );
}
