import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import useScrollPercentage from '../hooks/useScrollPercentage';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const scrollPercentage = useScrollPercentage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (scrollPercentage < 95 && scrollPercentage > 10) setShowButton(true);
    else setShowButton(false);
  }, [scrollPercentage]);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-8 md:bottom-[50px] md:right-[20px] z-40 print:hidden"
        >
          <IoIosArrowUp className="bg-black text-white rounded-lg shadow-lg text-[45px] md:mr-10" />
        </button>
      )}
    </>
  );
}
