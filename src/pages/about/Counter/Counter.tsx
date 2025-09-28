"use client";

import Button from "@/components/Button/Button";
import React from "react";

type Props = {
  count: number;
  handleClick: () => void;
};

const Counter = ({ count, handleClick }: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">{count}</div>
      <div className="text-center mb-4">
        <Button onClick={handleClick} />
      </div>
    </div>
  );
};

export default Counter;
