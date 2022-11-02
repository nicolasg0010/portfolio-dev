import { motion } from 'framer-motion';

type Props = {
  variants:
    | {
        hidden: { x?: number; opacity: number; y?: number };
        visible: {
          x?: number;
          y?: number;
          opacity?: number;
          transition: {
            duration?: number;
            type: string;
            stiffness: number;
          };
        };
      }
    | {
        hidden: { opacity: number };
        visible: { opacity: number; transition: { delay: number } };
      };
  className: string;
  children: JSX.Element;
  // infinity: any;
};

export default function AnimatedText({
  variants,
  className,
  children,
}: // infinity,
Props) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
}
