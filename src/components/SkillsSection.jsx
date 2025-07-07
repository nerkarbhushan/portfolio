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
    <section id="skills" className="text-white scroll-mt-[80px] min-h-[60vh]">
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
        className="md:text-[1.35rem] text-justify space-y-6"
      >
        <div>
          <TextHighlight>Frontend Technologies</TextHighlight>
          <ul className="list-disc list-inside pl-4">
            <li>
              <TextHighlight>Languages & Frameworks</TextHighlight> - HTML, CSS,
              JavaScript, React.js
            </li>
            <li>
              <TextHighlight>Styling & UI Libraries</TextHighlight> - Tailwind
              CSS, Bootstrap
            </li>
            <li>
              <TextHighlight>State Management</TextHighlight> - Redux, Redux
              Toolkit, Context API
            </li>
          </ul>
        </div>

        <div>
          <TextHighlight>Backend Technologies</TextHighlight>
          <ul className="list-disc list-inside pl-4">
            <li>
              <TextHighlight>Server & API Development</TextHighlight> - Node.js,
              Express.js, RESTful APIs, GraphQL, Socket.io (real-time)
            </li>
            <li>
              <TextHighlight>Architecture</TextHighlight> – Microservices,
              Event-Driven with Kafka
            </li>
            <li>
              <TextHighlight>Authentication & Security</TextHighlight> –
              Cookies, Refresh Tokens, JWT, OAuth
            </li>
            <li>
              <TextHighlight>Caching & Performance</TextHighlight> – Redis
              (caching, pub/sub), In-memory optimizations
            </li>
            <li>
              <TextHighlight>Third-Party Integrations</TextHighlight> – Payment
              Gateways (e.g., PayPal)
            </li>
          </ul>
        </div>

        <div>
          <TextHighlight>Databases</TextHighlight>
          <ul className="list-disc list-inside pl-4">
            <li>
              <TextHighlight>Relational</TextHighlight> - MySQL, PostgreSQL
            </li>
            <li>
              <TextHighlight>NoSQL</TextHighlight> - MongoDB
            </li>
          </ul>
        </div>

        <div>
          <TextHighlight>DevOps, Deployment & Cloud</TextHighlight>
          <ul className="list-disc list-inside pl-4">
            <li>
              <TextHighlight>Containerization & Orchestration</TextHighlight> –
              Docker, Kubernetes
            </li>
            <li>
              <TextHighlight>Cloud Services</TextHighlight> – AWS (EC2, S3, IAM,
              etc.)
            </li>
            <li>
              <TextHighlight>CI/CD Pipelines</TextHighlight> – GitHub Actions,
              Jenkins
            </li>
            <li>
              <TextHighlight>API Testing & Debugging</TextHighlight> – Postman
            </li>
          </ul>
        </div>

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
