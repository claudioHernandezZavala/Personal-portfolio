import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { default as AppWrap } from '../../wrapper/AppWrapper';
import {default as MotionWrap} from '../../wrapper/MotionWrap';
// const abouts =[
//   {
//     title:'Web Development',
//     description:"I am a good web developer",
//     imgUrl: images.about01
//   },
//   {
//     title:'Mobile development',
//     description:"I am a good Mobile developer",
//     imgUrl: images.about02
//   },
//   {
//     title:'Flutter and Kotlin',
//     description:"I am a good web designer",
//     imgUrl: images.about03
//   }
// ];
const About = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data)=> (
      setabouts(data)
    ));
  }, []);
  return (
    <>
      <h2 className="head-text">I know that <span>Good apps </span><br/> means <span>Good business</span>
      
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about,index) => (
            <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.5,type:"tween"}}
              className="app__profile-item"
              key={about.title+index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className="bold-text" style={{marginTop:20}}>
                {about.title}
              </h2>
              <p className="p-text" style={{marginTop:10}}>{about.description}</p>

            </motion.div>
          ))
        }
       
      </div>
     
    </>
  );
};

export default AppWrap(MotionWrap(About,'app__about'),"About",'app__whitebg');
