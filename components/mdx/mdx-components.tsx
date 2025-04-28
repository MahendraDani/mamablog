import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";
import React from "react";

import { openSans } from "@/app/layout";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "scroll-m-20 mt-4 text-lg sm:text-xl font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-2 scroll-m-20 sm:text-lg font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "scroll-m-20 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-3 scroll-m-20 text-lg font-semibold tracking-tight text-heading/50",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-3 scroll-m-20 text-base font-semibold tracking-tight text-heading/50",
        className
      )}
      {...props}
    />
  ),
  a: ({className,children,...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium text-blue-700/70 hover:text-blue-800 underline decoration-dashed decoration-[1px] underline-offset-4 inline-flex items-center py-1 text-wrap", className)}
      target="_blank"
      {...props}
    >
      {children}
    </a>   
  ),
  p: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-6 my-1 [&:not(:first-child)]:mt-2",className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-1 leading-6 ml-6 list-disc [&>li]:mt-1", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-1 leading-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-6", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "my-3 border-l-4 pl-4 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    // <code
    //   className={cn(
    //     "min-h-[12rem] border overflow-x-auto relative rounded-sm px-[0.3rem] py-1 font-mono text-sm bg-black/70 text-heading-secondary/90 selection:bg-blue-500",
    //     className
    //   )}
    //   {...props}
    // >
    //   {children}
    // </code>
    <code className="relative rounded bg-[#22272E] text-white/70 px-[0.3rem] py-[0.2rem] font-mono text-sm overflow-auto">
      {children}
    </code>
  ),
  Image: (props: ImageProps) => <Image {...props} alt="blog image" />,
};