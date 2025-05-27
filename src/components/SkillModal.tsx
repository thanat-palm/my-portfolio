import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  skills: { title: string; category: string; link: string; logo: string; }[];
}

export const SkillModal: React.FC<Props> = ({ isOpen, onClose, title, skills }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-base-100 w-full max-w-3xl rounded-xl p-6 shadow-xl outline-2 outline-accent"
            initial={{ scale: 0.8, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-5xl uppercase">{title}</h2>
              <button onClick={onClose} className="text-error font-bold text-xl btn btn-circle"><IoMdClose /></button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.filter((skill) => title === skill.category ).map((skill, index) => (
                <motion.a
                  key={skill.title}
                  className="p-4 relative rounded-md bg-base-200 shadow-md hover:shadow-xl flex items-center transition-all hover:-translate-y-1 duration-200 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={skill.link}
                >
                  <div className="flex-1">
                    <div className="rounded-full bg-white w-fit p-3">
                      <img src={skill.logo} alt={skill.title} className="size-8"/>
                    </div>
                  </div>
                  <h4 className="flex-1 uppercase text-xl">{skill.title}</h4>
                  <FaExternalLinkAlt className="absolute bottom-2 right-2"/>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
