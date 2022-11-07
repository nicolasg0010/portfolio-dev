import { motion } from 'framer-motion';

type Props = {
  variants: {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: {
        delayChildren: number;
        staggerChildren: number;
        delay?: any;
      };
    };
  };
  className: string;
  children: JSX.Element;
  infinity?: any;
  style?: any;
};

export default function AnimatedDiv({
  variants,
  className,
  children,
  infinity,
  style,
}: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      style={style}
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
