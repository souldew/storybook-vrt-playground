"use client";

import React from "react";

type Props = {
  onClick?: () => void;
  color?: "red" | "blue" | "green";
};

const Button = ({ onClick, color = "blue" }: Props) => {
  const bgColorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };
  return (
    <button
      className={`${bgColorMap[color]} text-white py-3 px-28 rounded-full cursor-pointer`}
      onClick={onClick}
    >
      Click Me
    </button>
  );
};

export default Button;
