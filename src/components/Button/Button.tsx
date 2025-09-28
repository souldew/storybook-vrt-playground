"use client";

import React from "react";

type Props = {
  onClick?: () => void;
};

const Button = ({ onClick }: Props) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
      onClick={onClick}
    >
      Click Me
    </button>
  );
};

export default Button;
