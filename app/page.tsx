import {articles} from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function Home() {
  const article = articles[0];

  return (
    <div>
      {/* <pre>
        <code>
          {JSON.stringify(articles, null, 2)}
        </code>        
      </pre> */}
      <MDXContentRenderer code={article.body}/>
    </div>
  );
}
