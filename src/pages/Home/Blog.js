import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Blog() {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SectionTitle title="Blog" />
      <div className="flex container mx-auto">
       <div className="container mx-auto flex flex-wrap gap-10 items-center justify-center pb-[10rem]">
       <h1 className="text-white">On Progress..</h1>
       </div>
      </div>
    </div>
  );
}

export default Blog;
