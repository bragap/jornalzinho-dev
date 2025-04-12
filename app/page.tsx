import Link from "next/link";
import {ROUTES} from "@/lib/routes";


export default async function Home() {

  return (
    <>
    Bem-vindo. <Link href={ROUTES.JORNAL}> Acesse</Link>
    </>
    
  );
}


