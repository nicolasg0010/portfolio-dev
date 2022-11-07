import { motion } from 'framer-motion';
import { popUp, opacityVariant } from '../../styles/FramerMotionVariants';
import { FiDownload } from 'react-icons/fi';
import Ripples from 'react-ripples';

import { FadeContainer } from '../../styles/FramerMotionVariants';

export default function Header() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      variants={FadeContainer}
      viewport={{ once: true }}
      className="grid place-content-center py-20 min-h-screen"
    >
      <div className="w-full relative mx-auto flex flex-col items-center gap-10">
        <motion.div
          variants={popUp}
          className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:rounded-full before:animate-photo-spin"
        >
          <img
            src="https://avatars.githubusercontent.com/u/104043118?v=4"
            className="rounded-full shadow filter saturate-0"
            width={400}
            height={400}
            alt="cover Profile Image"
          />
        </motion.div>

        <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
          <div className="flex flex-col gap-1">
            <motion.h1
              variants={opacityVariant}
              className="text-5xl lg:text-6xl font-bold font-sarina"
            >
              Nicolas Garcia
            </motion.h1>
            <motion.p
              variants={opacityVariant}
              className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
            >
              Full-stack Developer
            </motion.p>
          </div>

          <motion.p
            variants={opacityVariant}
            className="text-gray-500 font-medium text-sm md:text-base text-center"
          >
            I just graduated from Henry bootcamp as a Full-stack developer. My
            favorite tools are React and TypeScript.
          </motion.p>
        </div>

        <motion.div className="rounded-md overflow-hidden" variants={popUp}>
          <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
            <button
              className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 select-none hover:bg-gray-100 outline-none"
              onClick={() => alert('download resume')}
            >
              <FiDownload />
              <p>Resume</p>
            </button>
          </Ripples>
        </motion.div>
      </div>
    </motion.section>
  );
}
