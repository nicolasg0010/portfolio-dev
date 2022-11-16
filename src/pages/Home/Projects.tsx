import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import Project from '../../components/Project';
import AnimatedDiv from '../../components/FramerMotion/AnimatedDiv';
import { FadeContainer } from '../../styles/FramerMotionVariants';
import { projectsData } from '../../content/projectsData';
import HomeHeading from '../../components/HomeHeading';
import { motion } from 'framer-motion';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <section id="projects" className="pageTop py-20 mx-5">
        <HomeHeading title={`${t('projects.title')}`} />
        <motion.p>
          {t('projects.description')}
          <br />
          {t('projects.optional')}
          <motion.a
            className="text-blue-700"
            href="https://github.com/nicolasg0010"
            target="_blank"
            rel="noreferrer"
          >
            {t('projects.link')}
          </motion.a>
          .
        </motion.p>
        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          <AnimatePresence>
            {projectsData.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </AnimatePresence>
        </AnimatedDiv>
      </section>
    </>
  );
}
