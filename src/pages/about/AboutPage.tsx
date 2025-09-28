"use client";

import React from "react";
import Counter from "./Counter/Counter";

const AboutPage = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Counter count={count} handleClick={handleClick} />
      <p>このページはaboutページです。</p>
      <p>このページでCounterを使っているClient Componentです。</p>
    </>
  );
};

export default AboutPage;
