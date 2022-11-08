import { RiTranslate2 } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageBtn() {
  const { i18n } = useTranslation();
  const [currLang, setCurrLang] = useState('');

  const changeLanguage = () => {
    if (currLang === 'es') {
      setCurrLang('en');
    } else {
      setCurrLang('es');
    }
    i18n.changeLanguage(currLang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    setCurrLang(i18n.resolvedLanguage);
  }, []);

  return (
    <button
      onClick={changeLanguage}
      className="flex items-center gap-2 z-10 px-2 md:px-3 py-[3px] hover:bg-gray-100 rounded-md"
    >
      <RiTranslate2 />
      <span className="hidden sm:block">
        {currLang === 'es' ? 'English' : 'Español'}
      </span>
    </button>
  );
}
