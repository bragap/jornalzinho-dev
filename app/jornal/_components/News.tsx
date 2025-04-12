
import {getNewsByTopic , getHeadlineNews } from "@/lib/gnews";
import { Post } from "@/lib/constants";


export default async function News(){
    const posts = await getNewsByTopic('tecnologia');
    const headlineNews = await getHeadlineNews();

    return(
        <>
        <ul>
                {posts.articles.map((post: Post) => (
                    <li key={post.title}>
                        {post.title}
                    </li>
                ))}
            </ul>
            <hr />
            <ul>
                {headlineNews.articles.map((post: Post) => (
                    <li key={post.title}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </>
    )
}