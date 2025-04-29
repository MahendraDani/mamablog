import {articles} from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function Home() {

  return (
    <div>
      <pre>
        <code>
        {JSON.stringify(articles,null,2)}
        </code>
      </pre>
    </div>
  );
}
