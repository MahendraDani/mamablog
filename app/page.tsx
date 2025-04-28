import {articles} from "#site/content"

export default function Home() {

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(articles, null, 2)}
        </code>        
      </pre>
    </div>
  );
}
