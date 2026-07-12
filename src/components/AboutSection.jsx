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
            <TextHighlight>DevOps Engineer</TextHighlight> with approximately{" "}
            <TextHighlight>2 years of hands-on experience</TextHighlight> in
            designing, implementing, and maintaining CI/CD pipelines,
            containerized applications, and cloud infrastructure. Skilled in{" "}
            <TextHighlight>
              Docker, Kubernetes, GitLab CI/CD, AWS (EC2, S3, IAM, VPC), and
              Linux
            </TextHighlight>
            , with expertise in deployment automation, infrastructure
            management, and improving application reliability and scalability.
          </div>

          <div>
            Experienced in automating deployments, managing{" "}
            <TextHighlight>microservices architectures</TextHighlight>, and
            implementing secure deployment workflows. Hands-on experience with{" "}
            <TextHighlight>
              Docker, Kubernetes, GitLab CI/CD, AWS, HashiCorp Vault, Harbor,
              Redis, and Apache Airflow
            </TextHighlight>
            . Skilled in monitoring and observability using{" "}
            <TextHighlight>
              Grafana, Dynatrace, Splunk, and PySpark{" "}
            </TextHighlight>
            to improve system performance and reliability.
          </div>

          <div>
            I&apos;m passionate about{" "}
            <TextHighlight>automation, cloud-native technologies</TextHighlight>
            , infrastructure as code, and building reliable deployment
            pipelines. I enjoy exploring new DevOps tools, optimizing workflows,
            and continuously improving system scalability, security, and
            operational efficiency.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
