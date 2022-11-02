import AnimatedHeading from '../FramerMotion/AnimatedHeading';
import { headingFromLeft } from '../../styles/FramerMotionVariants';

import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="relative max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export function HomeHeading({ title }: { title: string }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}
