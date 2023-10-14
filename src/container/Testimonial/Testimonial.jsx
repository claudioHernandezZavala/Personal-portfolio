import React from "react";
import "./Testimonial.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import { default as AppWrap } from "../../wrapper/AppWrapper";
import { default as MotionWrap } from "../../wrapper/MotionWrap";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleClick = (index)=>{
    setcurrentIndex(index);

  }
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const test = testimonials[currentIndex];
  console.log(testimonials[0])
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item  app__flex">
          <img src={urlFor(test.imageurl)} alt={""} />
            <div className="app__testimonials-content">
              <p className="p-text">{test.feedback}</p>
              <div>
              <h4 className="bold-text">{test.name}</h4>
              <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonials-btns app__flex">
            <div className="app__flex" onClick={()=>handleClick(currentIndex===0?testimonials.length-1:currentIndex-1)}>
              <HiChevronLeft/>

            </div>
            <div className="app__flex" onClick={()=>handleClick(currentIndex===testimonials.length-1?0:currentIndex+1)}>
              <HiChevronRight/>

            </div>

          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
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
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonials"),
  "Testimonials",
  "app__primarybg"
);
