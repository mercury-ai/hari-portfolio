
import aboutImg from "../assets/hellounderscore.gif";
import {motion} from "framer-motion";

const container = (initial, final, delay) => ({
  hidden: { x: initial, opacity: 0 },
  visible: {
    x: final,
    opacity:1,
    transition: {
      duration: 0.5,
      delay: delay
    }
  }
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 sm:px-6 md:px-8 lg:px-12"> {/* Added responsive padding */}
      <h2 className="my-10 md:my-20 text-center text-3xl md:text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
          whileInView={{ opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:p-8">
            <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0"> {/* Added padding for image */}
              <img 
                className='rounded-2xl h-64 w-64 md:h-80 md:w-80 lg:h-[450px] lg:w-[450px] object-cover' 
                src={aboutImg} 
                alt='about' 
              /> 
            </div>
        </motion.div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-0'> {/* Centered text for mobile */}
            <motion.div
              whileInView={{ opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:0.5}} 
              className='my-2 max-w-xl py-6'
            >
              <p>
                I graduated with a Bachelor’s degree in Computer Science from Model Engineering College in 2022 and have 3 years of experience in backend development, cloud migration, and full-stack engineering. 
                During my studies, I interned with App Mastery, working on mobile apps with Flutter and backend APIs using Flask/Python.
              </p> 
              <br/>
              <p>
                After graduation, I joined iManage LLC as an Associate Software Engineer, contributing to backend development for iManage Work, including new features, bug fixes, and storage optimization, while collaborating on server-side services in C++ and Python. I also played a key role in a cloud migration project, focusing on APIs, functional tests, and query optimization using C#, .NET, and Python. 
                My expertise spans server-side engineering, application backends, and cloud solutions, with a technical toolkit that includes Node.js, Python (Flask), MS SQL, C# .NET, Docker, C++, and React. I am passionate about building scalable, efficient, and innovative solutions for modern businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;