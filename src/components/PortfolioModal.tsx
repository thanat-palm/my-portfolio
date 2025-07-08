import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  skills?: { title: string; category: string; image: string; link: string; tool: {title: string; logo: string;}[]; description: string};
}

export const PortfolioModal: React.FC<Props> = ({ isOpen, onClose, skills }) => {
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
            className="bg-base-100 max-w-3xl rounded-xl px-3 py-12 sm:px-6 shadow-xl relative"
            initial={{ scale: 0.8, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={onClose} className="text-error font-bold btn absolute top-1 right-1 btn-circle"><IoMdClose/></button>
            <div className="flex max-sm:flex-col">
                <div className="flex-1 flex items-center">
                  <a href={skills?.link} target="_blank" rel="noopener noreferrer" className="w-fit max-sm:mx-auto shadow-lg group/portImg relative">
                    <div className="w-full h-full rounded-box group-hover/portImg:bg-black/50 transition-all duration-300 ease-in-out flex items-center justify-center absolute z-20 top-0 left-0 gap-2 text-[0px] group-hover/portImg:text-xl"><FaExternalLinkAlt />Link</div>
                    <img src={skills?.image} alt={skills?.title} className="rounded-box w-full"/>
                  </a>
                </div>
                <div className="flex-1 pl-4 flex flex-col justify-center items-center gap-2">
                  <div className="max-sm:text-center">
                    <h1 className="text-2xl sm:text-4xl">{skills?.title}</h1>
                    <p className="text-base-content/70 sm:text-xl">{skills?.description}</p>
                  </div>
                  <div className="flex w-full gap-2 max-sm:justify-center flex-wrap text-sm sm:text-base">
                    {skills?.tool.map((tool) => (
                      <div key={tool.title} className="flex items-center gap-2 p-1 sm:p-2 bg-base-300 shadow-lg rounded-box text-nowrap">
                        <div className="size-3 sm:size-4">
                          <img src={tool.logo} alt={tool.title} className="w-full h-full"/>
                        </div>
                        <h1>{tool.title}</h1>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
