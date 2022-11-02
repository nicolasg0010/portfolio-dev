import { AnimatePresence } from 'framer-motion';
import Project from '../Project';
import AnimatedDiv from '../FramerMotion/AnimatedDiv';
import { FadeContainer } from '../../styles/FramerMotionVariants';
import { projectData } from '../../utils/utils';
import { HomeHeading } from './index';

export default function Projects() {
  return (
    <>
      <section className="pageTop py-20">
        <HomeHeading title="My Projects" />

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          <AnimatePresence>
            {projectData.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </AnimatePresence>
        </AnimatedDiv>
      </section>
    </>
  );
}
