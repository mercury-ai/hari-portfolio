import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EXPERIENCES } from '../constants';
import {motion} from "framer-motion";

const Timeline = () => {
  // Sort experiences by the start date (ascending)
  const sortedExperiences = EXPERIENCES.sort((a, b) => {
    const getYear = dateStr => parseInt(dateStr.split(" - ")[0], 10);
    return getYear(a.year) - getYear(b.year);
  });

  return (
    <motion.div 
      whileInView={{ opacity:1}}
      initial={{opacity:0}}
      transition={{duration:1}}
      className="px-4 sm:px-6 md:px-8 lg:px-12 border-b border-neutral-900 pb-4"
    >
      <h2 className="text-4xl mb-10 text-neutral-300 my-20 text-center">Career Timeline</h2>
      <VerticalTimeline>
        {sortedExperiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work "
            date={experience.year}
            contentStyle={{ background: '#2D1B4A', color: '#E0D6E0' }}
            contentArrowStyle={{ borderRight: '7px solid #2D1B4A' }}
            iconStyle={{ background: '#6D28D9', color: '#FFFFFF' }}
            icon={
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v2h-2v-2zm1-11a1 1 0 01.993.883L13 7v5a1 1 0 01-.883.993L12 13a1 1 0 01-.993-.883L11 12V7a1 1 0 01.883-.993L12 6z" />
              </svg>
            }
          >
            <h3 className="text-xl font-semibold text-purple-300 text-center">{experience.role}</h3>
            <h4 className="text-lg font-medium text-neutral-400 text-center">{experience.company}</h4>
            <p className="mt-2 text-neutral-400 text-center">{experience.description}</p>

            <div className="mt-4 flex flex-col items-center">
              {experience.type === "edu" ? (
                // Display CGPA in a styled box like technologies
                <ul className="flex flex-wrap gap-2 justify-center">
                  <li className="px-2 py-1 bg-purple-200 text-purple-900 rounded-lg text-sm">
                    CGPA: {experience.cgpa}
                  </li>
                </ul>
              ) : (
                <>
                  <h4 className="text-sm font-semibold text-neutral-400 mb-2">Technologies:</h4>
                  <ul className="flex flex-wrap gap-2 justify-center">
                    {experience.technologies.map((tech, i) => (
                      <li key={i} className="px-2 py-1 bg-purple-200 text-purple-900 rounded-lg text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Timeline;
