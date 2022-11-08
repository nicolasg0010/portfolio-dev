import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import Project from '../Project';
import AnimatedDiv from '../FramerMotion/AnimatedDiv';
import { FadeContainer } from '../../styles/FramerMotionVariants';
import { projectData } from '../../utils/utils';
import { HomeHeading } from './index';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <section id="projects" className="pageTop py-20 mx-5">
        <HomeHeading title={`${t('projects.title')}`} />

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
