
import { motion } from 'framer-motion';

export const SlidePageWrapper = () => {
  return (
    <>
      {/* ปิดหน้า */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary origin-bottom z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* เปิดหน้า */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary origin-top z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
