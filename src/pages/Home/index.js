import React from "react";
import Header from "../../components/Header";
import Intro from "../../pages/Home/Intro";
import About from "../../pages/Home/About";
import Certificates from "../../pages/Home/Certificates";
import Projects from "../../pages/Home/Projects";
import Blog from "../../pages/Home/Blog";
import Footer from "../../pages/Home/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary">
        <Intro />
        <About />
        <Certificates/>
        <Projects/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
