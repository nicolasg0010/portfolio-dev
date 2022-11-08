import { socialMedia } from '../utils/utils';
import { FadeContainer, popUp } from '../styles/FramerMotionVariants';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="text-gray-600 font-inter pt-10 mb-20 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <section className="flex justify-around">
          <div className="flex flex-col gap-4 capitalize">
            {socialMedia.map((platform) => {
              return (
                <motion.a
                  key={platform.title}
                  className="hover:text-black w-fit"
                  variants={popUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={platform.url}
                >
                  <div className="flex gap-2 items-center">
                    <platform.Icon className="h-4 w-4" /> {platform.title}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>
      </motion.div>
    </footer>
  );
}
