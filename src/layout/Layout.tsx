import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-11">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
