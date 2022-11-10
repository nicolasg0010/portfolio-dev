import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="relative max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
