import { motion } from 'framer-motion';

import { popUp } from '../styles/FramerMotionVariants';

type Props = {
  menuOpen: boolean;
  handleMenu: () => void;
};

export default function HamburgerBtn({ menuOpen, handleMenu }: Props) {
  return (
    <motion.div
      style={{ zIndex: 1000 }}
      initial="hidden"
      animate="visible"
      variants={popUp}
      className="sm:hidden"
    >
      {!menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50"
          onClick={handleMenu}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer select-none transform duration-300  rounded-md active:scale-50"
          onClick={handleMenu}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </motion.div>
  );
}
