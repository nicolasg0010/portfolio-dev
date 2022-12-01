import { useTranslation } from 'react-i18next';

import HomeHeading from '../../components/HomeHeading';

import AnimatedDiv from '../../components/FramerMotion/AnimatedDiv';
import { opacityVariant } from '../../styles/FramerMotionVariants';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="pageTop py-40 mx-5">
        <HomeHeading title={`${t('about.title')}`} />
        <AnimatedDiv
          variants={opacityVariant}
          className="font-inter w-full blog-container prose-sm 3xl:prose-lg"
        >
          <div className="prose-sm 3xl:prose-lg text-center sm:text-left">
            <p>{t('about.body')}</p>
            <br />
            <p>{t('about.tech')}</p>
            <br />
            <p>{t('about.hobbies')}</p>
          </div>
        </AnimatedDiv>
      </section>
    </>
  );
}
