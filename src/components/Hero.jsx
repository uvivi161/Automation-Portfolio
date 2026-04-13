import { motion } from "framer-motion";
import CV_file from "../../public/cv/AhuvaVinograd.pdf";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ahuva Vinograd</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Automation Engineer building reliable, scalable testing solutions <br className='sm:block hidden' />
            with a passion for quality, clean code, and smart processes.
          </p>
          <br />
          <p className={`mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]`}>
            I'm an Automation Engineer with a strong passion for quality and well-structured test systems.<br />
            I believe in creating efficient, maintainable automation solutions that bring real value to development teams.<br />
            I enjoy identifying complex issues and improving processes through continuous learning and creative problem-solving.<br />
            I'm looking to contribute my skills and grow in a dynamic, professional environment.<br />
          </p>

          <div className={`mt-8 flex justify-center pt-20`}>
            <a
              href={CV_file}
              download
              className={`inline-flex items-center gap-2 px-6 py-3
                   border border-[#915EFF] text-[#915EFF]
                   rounded-lg font-medium
                   hover:bg-[#915EFF] hover:text-white
                   transition-colors duration-300`}
            >
              Download my CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;