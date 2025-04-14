import { Button } from "@/components/ui/button";

interface TopbarProps{
    setTopic: (topic: string) => void;
}

export default function Topbar ({setTopic}: TopbarProps) {
    
    return(
        <>
         <Button variant={"default"} onClick={() => setTopic("technology")}>Tecnologia</Button>
        <Button variant={"default"} onClick={() => setTopic("sports")}>Esporte</Button>
        </>
    )
}