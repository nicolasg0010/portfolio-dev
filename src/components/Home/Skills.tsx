/* eslint-disable indent */
import { motion } from 'framer-motion';

import { HomeHeading } from './index';

import { FadeContainer, popUp } from '../../styles/FramerMotionVariants';

import {
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiJest,
  SiHtml5,
  SiCss3,
  SiHeroku,
} from 'react-icons/si';

import { FaReact } from 'react-icons/fa';

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
        <motion.div
          variants={popUp}
          title="React"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300  transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <FaReact className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            React
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="Redux"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiRedux className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            Redux
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="TypeScript"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiTypescript className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            TypeScript
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="JavaScript"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300  transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiJavascript className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            JavaScript
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="Node.js"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiNodedotjs className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            Node.js
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="Express"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiExpress className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            Express
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="PostgreSQL"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiPostgresql className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            PostgreSQL
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="Sequelize"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiSequelize className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            Sequelize
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="JEST"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiJest className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            JEST
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="Heroku"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiHeroku className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            Heroku
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="CSS3"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiCss3 className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            CSS3
          </p>
        </motion.div>

        <motion.div
          variants={popUp}
          title="HTML"
          className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white border rounded-sm border-gray-300 transform origin-center md:origin-top group"
        >
          <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
            <SiHtml5 className="w-8 h-8" />
          </div>
          <p className="inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
            HTML
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
