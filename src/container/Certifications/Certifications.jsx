import React from "react";
import "./certifications.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import { default as AppWrap } from "../../wrapper/AppWrapper";
import { default as MotionWrap } from "../../wrapper/MotionWrap";
const Certifications = () => {
    const [brands, setBrands] = useState([]);
    const [certifications, setcertifications] = useState([]);
    const [currentIndex, setcurrentIndex] = useState(0);
    const handleClick = (index)=>{
      setcurrentIndex(index);
  
    }
    useEffect(() => {
      const query = '*[_type == "certifications"]';
      const brandsQuery = '*[_type == "brands"]';

      client.fetch(query).then((data) => {
        setcertifications(data);
      });
      client.fetch(brandsQuery).then((data) => {
        setBrands(data);
      });

    }, []);
    const cert = certifications[currentIndex];

  return (
    <>
    {certifications.length && (
      <>
            <h2 className="head-text">Certifications</h2>

        <div className="app__certifications-item  app__flex">
        <img src={urlFor(cert.imgUrl)} alt={""} />
          <div className="app__certifications-content">
            <p className="p-text">{cert.name}</p>
            <div>
            <h4 className="bold-text">{cert.company}</h4>
            <h5 className="p-text">{cert.date}</h5>
            </div>
          </div>
        </div>
        <div className="app__certifications-btns app__flex">
          <div className="app__flex" onClick={()=>handleClick(currentIndex===0?certifications.length-1:currentIndex-1)}>
            <HiChevronLeft/>

          </div>
          <div className="app__flex" onClick={()=>handleClick(currentIndex===certifications.length-1?0:currentIndex+1)}>
            <HiChevronRight/>

          </div>

        </div>
      </>
    )}
    <div className="app__certifications-brands app__flex">
      {brands.map((brand) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
          key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name} />
        </motion.div>
      ))}
    </div>
  </>
  )
}
export default AppWrap(
    MotionWrap(Certifications, "app__certifications"),
    "Certifications",
    "app__primarybg"
  );