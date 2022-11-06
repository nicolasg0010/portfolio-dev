/* eslint-disable indent */
import { motion } from 'framer-motion';

import { HomeHeading } from './index';
import { skills } from '../../utils/utils';
import { FadeContainer, popUp } from '../../styles/FramerMotionVariants';

export default function Skills() {
  return (
    <section className="mx-5 py-20">
      <HomeHeading title="My Top Skills" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid my-10 gap-4 grid-cols-3"
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.title}
              variants={popUp}
              title={skill.title}
              className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300  transform origin-center md:origin-top group"
            >
              <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
                <skill.Icon className="w-8 h-8" />
              </div>
              <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
                {skill.title}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
