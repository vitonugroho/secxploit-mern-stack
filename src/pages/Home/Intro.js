import React from "react";
import "../../Intro.css"; // Import CSS untuk animasi

function Intro() {
  return (
    <div className="flex items-center justify-center p-5 h-[80vh] bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-tablet:space-y-12 mb-[10rem] max-tablet:mb-[10rem] space-y-12 pt-[20rem]">
        <h1 className="max-tablet:text-[1rem] text-white text-2xl font-normal">Hi, I am</h1>
        <h1 className="max-tablet:text-3xl text-6xl text-secondary dark:text-tertiary font-bold">
          Raden Muhammad Vito Nugroho
        </h1>
        <h1 className="max-tablet:text-2xl text-6xl text-white font-bold typing-effect">
          I secure digital world assets.
        </h1>
        <p className="max-tablet:text-[0.8rem] text-white font-medium">
          Hey, I'm Raden Muhammad Vito Nugroho, a kind-hearted hacker focusing
          on Cyber Security Red Team. <br></br> If you're not familiar with this field,
          I'm the person responsible for testing the strength <br></br> of systems and
          applications through strategic methods (and sometimes clever tricks). <br></br>
          I enjoy taking on the role of an attacker trying to exploit
          vulnerabilities in systems. <br></br> Let’s chat more about how I can help
          safeguard your digital assets!
        </p>
        <button className="max-tablet:text-[0.8rem] px-10 py-3 border-2 rounded border-tertiary text-tertiary hover:bg-tertiary hover:text-slate-950 hover:shadow-xl transition duration-300 ease-in-out">
          <a href="#">Contact Me</a>
        </button>
      </div>
    </div>
  );
}

export default Intro;
