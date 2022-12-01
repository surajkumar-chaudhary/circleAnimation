import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/html.svg";
import PYTHON from "../assets/python.svg";
import JAVA from "../assets/java.svg";
import NODE from "../assets/node-js.svg";
import REACT from "../assets/react-js.svg";

const SelfCircle = () => {
  const ferrisOfTechs = [HTML, PYTHON, JAVA, NODE, REACT];
  return (
    <div className="App">
      {ferrisOfTechs.map((tech, index) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
            }}
          >
            <div key={index} className="image-parent">
              <img src={tech} alt="hello there" className="h-[50px] w-[50px]" />
            </div>
          </motion.div>
        );
      }, [])}
    </div>
  );
};

export default SelfCircle;
