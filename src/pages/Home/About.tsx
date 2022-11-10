import { useTranslation } from 'react-i18next';
import AnimatedDiv from '../../components/FramerMotion/AnimatedDiv';
import { opacityVariant } from '../../styles/FramerMotionVariants';
import HomeHeading from '../../components/HomeHeading';

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              totam nesciunt illo sequi enim praesentium fugit perferendis
              officiis labore exercitationem! Ad, voluptate eligendi! Alias
              aspernatur asperiores nulla doloremque illum culpa!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              totam nesciunt illo sequi enim praesentium fugit perferendis
              officiis labore exercitationem! Ad, voluptate eligendi! Alias
              aspernatur asperiores nulla doloremque illum culpa!
            </p>
          </div>
        </AnimatedDiv>
      </section>
    </>
  );
}
