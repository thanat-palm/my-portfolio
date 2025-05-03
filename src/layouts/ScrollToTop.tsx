"use-client"

import { toTop } from "@/utils/functions/Scrolling";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTop = () => {
    const [showBtn , setShowBtn] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) { // 100 คือระยะ scroll ที่ปุ่มจะโผล่
            setShowBtn(true);
          } else {
            setShowBtn(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="w-full h-fit sticky bottom-0 flex justify-end ">
                    <FaChevronUp onClick={toTop} className={`fixed bottom-4 right-4 btn btn-soft btn-primary btn-circle p-2 transition-opacity duration-300 ${
                showBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}/>
    </div>
  )
}
