import {
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAnimation, motion } from 'framer-motion';

import LanguageBtn from '../components/LanguageBtn';
import HamburgerBtn from '../components/HamburgerBtn';
import { popUp, FadeContainer } from '../styles/FramerMotionVariants';
import { useTranslation } from 'react-i18next';

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ menuOpen, setMenuOpen }: Props) {
  const { t } = useTranslation();
  const navRef = useRef<HTMLElement | null>(null);
  const control = useAnimation();

  // const lockScroll = () => {
  //   const root = document.getElementsByTagName('html')[0];
  //   root.classList.toggle('lock-scroll');
  // };

  const handleMenu = () => {
    navRef.current?.classList.remove(...['shadow']);
    // lockScroll();
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
      <HamburgerBtn menuOpen={menuOpen} handleMenu={handleMenu} />
      <span>Nicolas Garcia</span>
      <motion.div className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          <button>
            <motion.a
              href="#home"
              variants={popUp}
              className="text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
            >
              <span className="capitalize">{t('navigation.home')}</span>
            </motion.a>
          </button>
          <button>
            <motion.a
              href="#skills"
              variants={popUp}
              className="text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
            >
              <span className="capitalize">{t('navigation.skills')}</span>
            </motion.a>
          </button>
          <button>
            <motion.a
              href="#projects"
              variants={popUp}
              className="text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
            >
              <span className="capitalize">{t('navigation.projects')}</span>
            </motion.a>
          </button>
          <button>
            <motion.a
              href="#about"
              variants={popUp}
              className="text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
            >
              <span className="capitalize">{t('navigation.about')}</span>
            </motion.a>
          </button>
          <button>
            <motion.a
              href="#contact"
              variants={popUp}
              className="text-black sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
            >
              <span className="capitalize">{t('navigation.contact')}</span>
            </motion.a>
          </button>
        </motion.div>
      </motion.div>
      <div className="z-10">
        <LanguageBtn />
      </div>
    </nav>
  );
}
