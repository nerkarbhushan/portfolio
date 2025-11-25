"use client";

import { useEffect, useRef } from "react";
import PcModelCanvas from "./canvas/PcModelCanvas";
import SectionHead from "./SectionHead";
import TextHighlight from "./TextHighlight";
import { motion, useAnimation, useInView } from "motion/react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <section
      id="about"
      className="text-white scroll-mt-[80px] min-h-[60vh] leading-relaxed"
    >
      <SectionHead>About Me</SectionHead>

      <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 lg:gap-12">
        {/* MODEL CANVAS */}
        <div className="h-[30vh] lg:h-auto lg:w-[40%] flex justify-center">
          <PcModelCanvas />
        </div>

        {/* ABOUT CONTENT */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: "100%" },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animationControl}
          transition={{
            duration: 0.5,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="lg:w-[60%] text-justify text-[0.95rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] font-light space-y-6"
        >
          <div>
            <TextHighlight>Full Stack | MERN Stack Developer</TextHighlight>{" "}
            with 3.5 years of experience building scalable and reliable web
            applications. Skilled in{" "}
            <TextHighlight>
              React.js, Node.js, Express.js, Python, FastAPI, and MongoDB
            </TextHighlight>
            , with strong expertise across frontend development, backend API
            design, database structuring, and performance optimization.
          </div>

          <div>
            Experienced in <TextHighlight>RESTful & GraphQL APIs</TextHighlight>
            , real-time systems, and secure authentication using{" "}
            <TextHighlight>JWT & OAuth</TextHighlight>. Hands-on work with{" "}
            <TextHighlight>
              microservices, Docker, Kubernetes, Redis, AWS, Azure
            </TextHighlight>
            , and <TextHighlight>GitLab CI/CD</TextHighlight> for automated
            deployments. Skilled in{" "}
            <TextHighlight>
              HashiCorp Vault, Apache Airflow, Harbor registry
            </TextHighlight>
            , and observability tools including{" "}
            <TextHighlight>
              Grafana, Splunk, PySpark, and Dynatrace
            </TextHighlight>
            .
          </div>

          <div>
            I’m passionate about{" "}
            <TextHighlight>clean architecture, automation</TextHighlight>, and
            cloud-native development. Outside of work, I enjoy{" "}
            <TextHighlight>exploring new technologies</TextHighlight>, learning
            new tools, and sharpening my skills through{" "}
            <TextHighlight>problem-solving & debugging</TextHighlight>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
