import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { LineElement } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { link } from "fs";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const articles = defineCollection({
  name: "Blog",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(200),
      date: s.string().datetime(),
      published: s.boolean(),
      body: s.mdx(),
      toc: s.toc(),
      author : s.string(),
      category: s.string(),
      instagramURL : s.string().url().optional(),
      linkedInURL : s.string().url().optional(),
      twitterURL : s.string().url().optional(),
      facebookURL : s.string().url().optional(),
      image: s.string(),
      excerpt : s.excerpt(),
      metadata : s.metadata(),
      markdown : s.markdown(),
    })
    .transform(computedFields),
});


export default defineConfig({
  root: "content",
  collections: { articles },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      rehypeAutolinkHeadings,
      [
        rehypePrettyCode,
        {
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node: LineElement) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ]
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});

