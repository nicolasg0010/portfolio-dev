import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  hamFastFadeContainer,
  mobileNavItemSideways,
} from '../styles/FramerMotionVariants';

type Props = {
  setMenuOpen: (arg0: boolean) => void;
};

export default function MobileMenu({ setMenuOpen }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed font-normal bg-white w-screen h-screen top-0 left-0 z-50 sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="mt-28 mx-8 flex flex-col">
        <motion.a
          href="#home"
          className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
          variants={mobileNavItemSideways}
          onClick={() => setMenuOpen(false)}
        >
          {t('navigation.home')}
        </motion.a>
        <motion.a
          href="#skills"
          className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
          variants={mobileNavItemSideways}
          onClick={() => setMenuOpen(false)}
        >
          {t('navigation.skills')}
        </motion.a>
        <motion.a
          href="#projects"
          className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
          variants={mobileNavItemSideways}
          onClick={() => setMenuOpen(false)}
        >
          {t('navigation.projects')}
        </motion.a>
        <motion.a
          href="#about"
          className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
          variants={mobileNavItemSideways}
          onClick={() => setMenuOpen(false)}
        >
          {t('navigation.about')}
        </motion.a>
        <motion.a
          href="#contact"
          className="border-b border-gray-300 text-gray-900 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
          variants={mobileNavItemSideways}
          onClick={() => setMenuOpen(false)}
        >
          {t('navigation.contact')}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
