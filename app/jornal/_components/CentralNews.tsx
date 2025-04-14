import { getNewsByTopic } from "@/lib/gnews";
import { Post } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

interface CentralNewsProps {
    topic: string
}

export default function CentralNews({topic}: CentralNewsProps){

    const result = useQuery({
        queryKey :['news', topic],
        queryFn: () => getNewsByTopic(topic),
        staleTime: 1000*60
       })
       
    return (
       <>
        {result.data?.articles.map((news: Post) => (
            <div key={news.title}>{news.title}</div>
        ))}
       </>
    )
}