"use client";

import { useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import TextHighlight from "./TextHighlight";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <section id="projects" className="text-white scroll-mt-[80px] min-h-[60vh]">
      <SectionHead>Projects</SectionHead>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: "-100%" },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animationControl}
        transition={{
          duration: 0.5,
          x: { type: "spring", bounce: 0.4 },
        }}
        className="space-y-6 md:text-[1.35rem] text-justify"
      >
        <div>
          <TextHighlight>Portfolio Website</TextHighlight> <br />
          Built using <TextHighlight>React Native, Next.js</TextHighlight>. A
          personal portfolio showcasing skills, projects, and contact info with
          smooth navigation and responsive UI.
        </div>

        <div>
          <TextHighlight>MERN Stack Quiz App</TextHighlight> <br />
          Full-stack quiz application using{" "}
          <TextHighlight>
            MongoDB, Express.js, React.js, Node.js
          </TextHighlight>{" "}
          with role-based access for users and admins, quiz categories, timers,
          and result tracking.
        </div>

        <div>
          <TextHighlight>Code Snippet Microservice</TextHighlight> <br />
          Designed a scalable app using{" "}
          <TextHighlight>microservices architecture</TextHighlight> to store and
          share code snippets across different services with independent
          deployment.
        </div>

        <div>
          <TextHighlight>Service App</TextHighlight> <br />
          Developed with{" "}
          <TextHighlight>
            React, Tailwind CSS, Node.js, Express.js
          </TextHighlight>
          . A complete service management system allowing users to track,
          update, and manage service-related tasks.
        </div>

        <div>
          <TextHighlight>To-Do App</TextHighlight> <br />
          Simple yet functional task management app built with{" "}
          <TextHighlight>HTML, CSS, and JavaScript</TextHighlight>. Allows users
          to add, edit, delete, and complete tasks.
        </div>

        <div>
          <TextHighlight>Deployment Testing</TextHighlight> <br />
          Tested and deployed multiple apps using platforms like{" "}
          <TextHighlight>Render and Netlify</TextHighlight>, focusing on
          optimizing performance and handling real-world deployment challenges.
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
