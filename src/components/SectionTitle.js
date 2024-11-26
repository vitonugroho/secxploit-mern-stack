import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="container mx-auto flex gap-5 items-center pb-20">
      <h1 className="max-tablet:ml-5 max-tablet:text-[1.5rem] text-white text-3xl font-semibold">{title}</h1>
      <div className="w-[10rem] h-[0.2px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
