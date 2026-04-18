import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
        <About />
      </section>
      <section className="pb-[10px] px-6 max-w-7xl mx-auto" id="skills">
        <Skills />
      </section>
    </>
  );
};

export default HomePage;
