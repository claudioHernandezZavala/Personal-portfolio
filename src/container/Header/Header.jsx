import React from "react";
import "./Header.scss";
import { easeInOut, motion } from "framer-motion";
import { default as images } from "../../constants/images";
import { default as AppWrap } from '../../wrapper/AppWrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opactiy: [0, 1],
    transition: {
      duration: 1,
      ease: easeInOut,
    },
  },
};
const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opcaity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hey, I am</p>
              <h1 className="head-text">Claudio</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">Mobile developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opcaity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.andrefoto} />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alt="image_circle"
          className="overlay__circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.sass, images.react].map((circle, index) => (
          <div className="circle-cmp app_flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header,'Home');
