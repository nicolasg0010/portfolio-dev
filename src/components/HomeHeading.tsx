import AnimatedHeading from './FramerMotion/AnimatedHeading';
import { headingFromLeft } from '../styles/FramerMotionVariants';

export default function HomeHeading({ title }: { title: string }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}
