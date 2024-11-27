import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Calculator from "../../components/Calculator";

function Projects() {
  return (
    <div
      id="Projects"
      className="dark:bg-slate-950 bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <SectionTitle title="Projects" />
      <div className="flex container mx-auto">
        <div className="container mx-auto flex flex-wrap gap-10 items-center justify-center pb-[10rem]">
          <a
            href="https://ngopiatuh.secxploit.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-tablet:w-[25rem] rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              width="600rem"
              src="ngopiatuh.png"
              alt="Project Thumbnail"
            />
          </a>
          <Calculator />
          <a href="/Login" target="_blank" rel="noopener noreferrer">
            <img
              className="max-tablet:w-[25rem] rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              width="600rem"
              src="login_form.png"
              alt="Project Thumbnail"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
