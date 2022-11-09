import 'react-toastify/dist/ReactToastify.css';
import { popUpFromBottomForText } from '../../../styles/FramerMotionVariants';
import AnimatedText from '../../FramerMotion/AnimatedText';
import AnimatedHeading from '../../FramerMotion/AnimatedHeading';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="bg-white !relative py-20">
      {/* Get in touch top section */}
      <section className="w-full-width text-center pt-6 bg-white text-black">
        <AnimatedHeading
          variants={popUpFromBottomForText}
          className="font-bold text-4xl"
        >
          {t('contact.title')}
        </AnimatedHeading>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="px-4 py-2 font-medium text-slate-400"
        >
          <>{t('contact.description')}</>
        </AnimatedText>
      </section>

      {/* Wrapper Container */}
      <section className="flex flex-col lg:flex-row w-full mx-auto px-5 bg-white text-black lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-2xl font-bold w-full text-center my-2"
          >
            {t('contact.subtitle')}
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
