import 'react-toastify/dist/ReactToastify.css';
import { popUpFromBottomForText } from '../../../styles/FramerMotionVariants';
import AnimatedText from '../../FramerMotion/AnimatedText';
import AnimatedHeading from '../../FramerMotion/AnimatedHeading';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="bg-white !relative py-20">
      {/* Get in touch top section */}
      <section className="w-full-width text-center pt-6 bg-white text-black">
        <AnimatedHeading
          variants={popUpFromBottomForText}
          className="font-bold text-4xl"
        >
          Get in touch
        </AnimatedHeading>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="px-4 py-2 font-medium text-slate-400"
        >
          <>
            Have a little something, something you wanna talk about? Please feel
            free to get in touch anytime, whether for work or to just Hi 🙋‍♂️.
          </>
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
            Connect with me
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
