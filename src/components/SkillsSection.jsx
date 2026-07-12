"use client";

import { useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import TextHighlight from "./TextHighlight";
import { motion, useAnimation, useInView } from "framer-motion";

const SkillsSection = () => {
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
      id="skills"
      className="text-white scroll-mt-[80px] min-h-[60vh] leading-relaxed"
    >
      <SectionHead>Skills</SectionHead>

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
        className="font-light text-[0.95rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] text-justify space-y-8"
      >
        {/* DevOps */}
        <div>
          <TextHighlight>DevOps, Deployment & Cloud</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>CI/CD</TextHighlight> – GitLab CI/CD, Jenkins,
              GitHub Actions
            </li>
            <li>
              <TextHighlight>Containerization</TextHighlight> – Docker
            </li>
            <li>
              <TextHighlight>Container Orchestration</TextHighlight> –
              Kubernetes (Pods, Deployments, Services, Ingress)
            </li>
            <li>
              <TextHighlight>Cloud Services</TextHighlight> – AWS (EC2, S3, IAM,
              VPC, Load Balancer)
            </li>
            <li>
              <TextHighlight>Monitoring & Observability</TextHighlight> –
              Grafana, Dynatrace, Splunk
            </li>
            <li>
              <TextHighlight>Secrets Management</TextHighlight> – HashiCorp
              Vault
            </li>
            <li>
              <TextHighlight>Workflow Automation</TextHighlight> – Apache
              Airflow
            </li>
            <li>
              <TextHighlight>Artifact Management</TextHighlight> – Harbor
              Registry
            </li>
          </ul>
        </div>

        {/* Infrastructure */}
        <div>
          <TextHighlight>Infrastructure & Scripting</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Operating System</TextHighlight> – Linux
            </li>
            <li>
              <TextHighlight>Scripting</TextHighlight> – Bash (Shell Scripting)
            </li>
            <li>
              <TextHighlight>Configuration</TextHighlight> – YAML, JSON
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <TextHighlight>Databases</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Relational</TextHighlight> – MySQL, PostgreSQL
            </li>
          </ul>
        </div>

        {/* Programming */}
        <div>
          <TextHighlight>Programming (Supporting Skills)</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Languages</TextHighlight> – Python, Node.js,
              JavaScript
            </li>
            <li>
              <TextHighlight>Frameworks</TextHighlight> – React.js
            </li>
            <li>
              <TextHighlight>Backend Concepts</TextHighlight> – REST APIs,
              Microservices Architecture
            </li>
          </ul>
        </div>

        {/* Version Control */}
        <div>
          <TextHighlight>Version Control</TextHighlight>
          <ul className="list-disc list-inside pl-4">
            <li>Git, GitHub</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
