import ServerComponentNews from "./_components/ServerComponentNews";
import ClientComponentNews from "./_components/ClientComponentNews";

export default function Home() {

    return (
        <main className=" w-[70%] mx-auto">
            <ClientComponentNews/>
            <ServerComponentNews />
        </main>
    );
}


