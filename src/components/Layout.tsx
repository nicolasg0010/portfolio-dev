import { useState } from 'react';

import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {menuOpen && <MobileMenu />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-11">
        {children}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        temporibus? Quia laudantium facilis aut dolores. Quo nisi aliquid,
        maiores vero quis iste voluptatum ad quas fuga, optio earum
        necessitatibus beatae! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Doloremque, temporibus? Quia laudantium facilis aut
        dolores. Quo nisi aliquid, maiores vero quis iste voluptatum ad quas
        fuga, optio earum necessitatibus beatae! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Doloremque, temporibus? Quia laudantium
        facilis aut dolores. Quo nisi aliquid, maiores vero quis iste voluptatum
        ad quas fuga, optio earum necessitatibus beatae! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Doloremque, temporibus? Quia
        laudantium facilis aut dolores. Quo nisi aliquid, maiores vero quis iste
        voluptatum ad quas fuga, optio earum necessitatibus beatae! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Doloremque, temporibus?
        Quia laudantium facilis aut dolores. Quo nisi aliquid, maiores vero quis
        iste voluptatum ad quas fuga, optio earum necessitatibus beatae! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        temporibus? Quia laudantium facilis aut dolores. Quo nisi aliquid,
        maiores vero quis iste voluptatum ad quas fuga, optio earum
        necessitatibus beatae! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Doloremque, temporibus? Quia laudantium facilis aut
        dolores. Quo nisi aliquid, maiores vero quis iste voluptatum ad quas
        fuga, optio earum necessitatibus beatae! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Doloremque, temporibus? Quia laudantium
        facilis aut dolores. Quo nisi aliquid, maiores vero quis iste voluptatum
        ad quas fuga, optio earum necessitatibus beatae! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Doloremque, temporibus? Quia
        laudantium facilis aut dolores. Quo nisi aliquid, maiores vero quis iste
        voluptatum ad quas fuga, optio earum necessitatibus beatae!
      </main>
    </div>
  );
}
