import {
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAnimation, motion } from 'framer-motion';
import { FiMenu, FiSun, FiX } from 'react-icons/fi';

import { navSections } from '../utils/utils';
import { popUp, FadeContainer } from '../styles/FramerMotionVariants';

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ menuOpen, setMenuOpen }: Props) {
  const navRef = useRef<HTMLElement | null>(null);
  const control = useAnimation();

  const lockScroll = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('lock-scroll');
  };

  const handleMenu = () => {
    navRef.current?.classList.remove(...['shadow']);
    lockScroll();
    setMenuOpen(!menuOpen);
  };

  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current?.classList.add(
        ...['shadow', 'backdrop-blur-xl', 'bg-white/70']
      );

      control.start('visible');
    } else {
      navRef.current?.classList.remove(
        ...['shadow', 'backdrop-blur-xl', 'bg-white/70']
      );
      control.start('hidden');
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener('scroll', addShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  return (
    <nav
      className="fixed w-full h-11 flex justify-between items-center px-4 py-7 z-50"
      ref={navRef}
    >
      <HamBurger menuOpen={menuOpen} handleMenu={handleMenu} />

      <span>Nicolas Garcia</span>

      <motion.div className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          {navSections.map((section) => {
            return (
              <button key={section}>
                <motion.a
                  variants={popUp}
                  className=" text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
                >
                  <span className="capitalize">{section}</span>
                </motion.a>
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      <FiSun className="text-2xl" />
    </nav>
  );
}

function HamBurger({ menuOpen, handleMenu }: any) {
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
