import { useState } from 'react';

import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {menuOpen && <MobileMenu />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-11">{children}</main>
      <Footer />
    </div>
  );
}
