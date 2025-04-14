'use client'

import { useState } from "react";
import CentralNews from "./CentralNews";
import Topbar from "./Topbar";

export default function ClientComponentNews() {
  const [topic, setTopic] = useState("tecnologia");

  return (
    <main>
      <Topbar setTopic={setTopic} />
      <CentralNews topic={topic} />
    </main>
  );
}
