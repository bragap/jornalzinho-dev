import { Suspense } from "react";
import News from "./News";
import NewsSkeleton from "./NewsSkeleton";


export default async function ServerComponentNews() {
    return (
        <Suspense fallback={<NewsSkeleton />}>
            <News />
        </Suspense>
    )
}