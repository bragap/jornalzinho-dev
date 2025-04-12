
import { Suspense } from "react";
import News from "./_components/News";
import NewsSkeleton from "./_components/NewsSkeleton";


export default function Home() {

   
    return (
        <>
            <h1>Jornalzinho dev</h1>
            <Suspense fallback={<NewsSkeleton/>}>
                <News/>
            </Suspense>
            

        </>
    );
}


