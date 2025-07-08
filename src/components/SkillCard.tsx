import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  onClick: () => void;
  isActive?: boolean; // เพิ่มตรงนี้
}

export const FolderCard: React.FC<Props> = ({ title, onClick, isActive = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-48 h-36 cursor-pointer"
      animate={isActive || hovered ? { y: -10, rotate: -2 } : { y: 0, rotate: 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{scale: 1.05}}
      onClick={onClick}
    >
      {/* Folder Back */}
      <motion.svg
        viewBox="0 0 60 40"
        className="absolute w-48 h-36 z-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0c0-1.1.9-2 2-2h22l4 4h28c1.1 0 2 .9 2 2v33c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V0z"
          fill="var(--color-primary-content)"
        />
      </motion.svg>

      {/* Paper */}
      <motion.div
        className="absolute top-4 left-2 w-44 h-30 bg-base-100 rounded shadow-xl z-10 outline outline-accent"
        animate={isActive || hovered ? {y: -18} : {y: 0}}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Folder Front */}
      <motion.svg
        viewBox="0 0 60 40"
        className="absolute w-48 h-36 z-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7c0-1.1.9-2 2-2h56c1.1 0 2 .9 2 2v33c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V7z"
          fill="var(--color-primary)"
        />
        <text x="5%" y="95%" fill="var(--color-primary-content)" fontSize="12">
          {title}
        </text>
      </motion.svg>
    </motion.div>
  );
};
