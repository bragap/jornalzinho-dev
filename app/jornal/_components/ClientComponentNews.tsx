'use client'

import { useState } from "react";
import CentralNews from "./CentralNews";
import Sidebar from "./Sidebar";

export default function ClientComponentNews() {
  const [topic, setTopic] = useState("tecnologia");

  return (
    <main>
      <Sidebar setTopic={setTopic} />
      <CentralNews topic={topic} />
    </main>
  );
}
