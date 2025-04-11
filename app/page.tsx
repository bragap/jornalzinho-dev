
import {getNews} from "@/lib/gnews";
import { Post } from "@/lib/constants";

export default async function Home() {

  const posts = await getNews();

  return (
    <ul>
      {posts.articles.map((post: Post) => (
          <li key={post.title}>
              {post.title}
          </li>
      ))}
    </ul>
  );
}


