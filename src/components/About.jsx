import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Introduction</p> */}
          <h2 className={`${styles.sectionHeadText} text-center`}>ABOUT ME.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto '
        >
          For me, automation is not just about writing test scripts or validating functionality — it is about building intelligent, reliable systems that ensure quality at every level of the product.
          <br />
          <br />
          Working with embedded systems has shaped the way I think as an engineer. It requires precision, deep understanding of hardware-software interaction, and the ability to analyze complex system behavior under real-world constraints. Every test I design is driven by a need to ensure stability, accuracy, and consistency in environments where even the smallest detail matters.
          <br />
          <br />
          I approach automation as a structured and thoughtful process. It begins with understanding the system as a whole — its architecture, its limitations, and its purpose — and continues with designing scalable, maintainable, and efficient testing solutions. My goal is not only to detect issues, but to prevent them, by creating robust validation frameworks that support long-term product quality.
          <br />
          <br />
          I place strong emphasis on system-level thinking, integration, and continuous improvement. Whether working with low-level components or full system validation, I strive to build solutions that are clear, reliable, and aligned with real engineering needs.
          <br />
          <br />
          Beyond the technical aspect, I value collaboration, responsibility, and attention to detail. I aim to be part of a professional environment where quality is a shared goal, where challenges are approached with curiosity and precision, and where continuous learning drives both personal and team growth.
        </motion.p>
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
