"use client";
import Button from "@/components/Button/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="bg-red-50">
      <div className="h-screen flex justify-center self-stretch">
        <div className="flex flex-col justify-center items-center h-full">
          <div>{count}</div>
          <Button onClick={handleClick} />
        </div>
      </div>
    </main>
  );
}
