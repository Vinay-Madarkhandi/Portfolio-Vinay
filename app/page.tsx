import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
  return (
    <main className=" relative">
      <Navbar />
      <section className=" bg-[#f9f9f9]">
        <Hero />
      </section>
      <section className=" bg-white flex justify-center items-center">
        <About />
      </section>
      <section className=" bg-[#f9f9f9] md:flex md:justify-center md:items-center">
        <Projects />
      </section>
      <section className=" bg-white md:p-20 md:flex md:justify-center md:items-center max-md:p-11">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
