import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/html.svg";
import PYTHON from "../assets/python.svg";
import JAVA from "../assets/java.svg";
import NODE from "../assets/node-js.svg";
import REACT from "../assets/react-js.svg";

const SelfCircle2 = () => {
  const skills = [HTML, PYTHON, JAVA, NODE, REACT];
  return (
    <div className="h-screen  relative overflow-hidden">
      <div className="absolute right-[50%] top-[20%] bg-gray-500 text-white h-[50px] w-[50px] text-center flex items-center justify-center rounded-full">
        skills
      </div>
      {skills.map((skill, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={["round", "speedAnimation"]}
            variants={{
              round: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              speedAnimation: {
                rotate: -360,
                transition: {
                  duration: skills.length,
                  delay: index + 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              },
            }}
            key={index}
            className="bg-transparent h-[50vh] absolute right-[50%]  flex flex-col items-center"
          >
            <img src={skill} alt="" className="h-[50px] w-[50px] " />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SelfCircle2;
