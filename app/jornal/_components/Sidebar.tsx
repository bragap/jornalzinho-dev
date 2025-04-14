import { Button } from "@/components/ui/button";

interface SidebarProps{
    setTopic: (topic: string) => void;
}

export default function Sidebar ({setTopic}: SidebarProps) {
    
    return(
        <>
         <Button variant={"default"} onClick={() => setTopic("technology")}>Tecnologia</Button>
        <Button variant={"default"} onClick={() => setTopic("sports")}>Esporte</Button>
        </>
    )
}