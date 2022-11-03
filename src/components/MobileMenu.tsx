import { motion } from 'framer-motion';
import { navSections } from '../utils/utils';
import {
  hamFastFadeContainer,
  mobileNavItemSideways,
} from '../styles/FramerMotionVariants';

export default function MobileMenu() {
  return (
    <motion.div
      className="fixed font-normal bg-white w-screen h-screen top-0 left-0 z-50 sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="mt-28 mx-8 flex flex-col">
        {navSections.map((link) => {
          const navlink =
            link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
          return (
            <motion.a
              key={crypto.randomUUID()}
              href={navlink}
              className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
              variants={mobileNavItemSideways}
              // onClick={handleClick}
            >
              {link === 'rss' ? link.toUpperCase() : link}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
