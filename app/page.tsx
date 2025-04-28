import {articles} from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function Home() {
  const article = articles[0];

  return (
    <div>
      {articles.map((article,idx)=>(
        <MDXContentRenderer key={idx} code={article.body}/>
      ))}
    </div>
  );
}
