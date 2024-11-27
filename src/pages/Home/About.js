import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Wireshark",
    "Burpsuite",
    "Nmap",
    "Sqlmap",
    "Nikto",
    "Metasploit",
    "WPScan",
  ];

  return (
    <div id="About" className="pt-20 bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SectionTitle title="About" />
      <div className="max-tablet:flex-col flex items-center mb-10 container mx-auto">
        <div className="max-tablet:w-[16rem] max-tablet:h-[20vh] max-desktop:h-[44.2vh]">
          <dotlottie-player
            src="https://lottie.host/64d91566-0431-42f2-b4ed-3ac27c332c4f/naQhITa4mR.lottie"
            background="transparent"
            speed="0.9"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 max-tablet:w-full max-tablet:container max-tablet:mx-auto p-5">
          <p className="max-tablet:text-[0.8rem] text-white">
            I graduated from a vocational high school majoring in Computer and
            Network Engineering at SMK Negeri 2 Depok, and I am currently
            pursuing a bachelor's degree in Informatics Engineering at
            Universitas Pamulang. This ongoing education complements my hands-on
            experience and deepens my understanding of computer science and
            cybersecurity principles.
          </p>
          <p className="max-tablet:text-[0.8rem] text-white">
            I have developed expertise in various technologies, including:
            <br></br>• Linux (system administration, scripting, and networking)
            <br></br>• AWS (cloud infrastructure, deployment, and security)
            <br></br>• Python (automation, penetration testing tools, and
            scripting)
            <br></br>• C Language (low-level programming, understanding
            exploits, and buffer overflows)
            <br></br>
            My passion lies in identifying and resolving security
            vulnerabilities — whether in the digital world or real life. Let's
            talk more about how I can help secure your digital assets and
            strengthen your cybersecurity posture!
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="max-tablet:text-[1rem] text-tertiary text-xl text-center">
          Here are a few tools I've been working with recently:
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-[4rem] mt-5 pb-[10rem]">
          {skills.map((skill, index) => (
            <div className="max-tablet:text-[0.7rem] border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
