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
        {/* Frontend */}
        <div>
          <TextHighlight>Frontend Technologies</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Languages & Frameworks</TextHighlight> – HTML, CSS,
              JavaScript, React.js
            </li>
            <li>
              <TextHighlight>Styling & UI Libraries</TextHighlight> – Tailwind
              CSS, Bootstrap
            </li>
            <li>
              <TextHighlight>State Management</TextHighlight> – Redux, Redux
              Toolkit, Context API
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <TextHighlight>Backend Technologies</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Server & API Development</TextHighlight> – Node.js,
              Express.js, Python, FastAPI, RESTful APIs, GraphQL, Socket.io
            </li>
            <li>
              <TextHighlight>Architecture</TextHighlight> – Microservices,
              Event-Driven (Kafka)
            </li>
            <li>
              <TextHighlight>Authentication & Security</TextHighlight> –
              Cookies, Refresh Tokens, JWT, OAuth
            </li>
            <li>
              <TextHighlight>Caching & Performance</TextHighlight> – Redis
              (caching, pub/sub), In-memory optimization
            </li>
            <li>
              <TextHighlight>Third-Party Integrations</TextHighlight> – Payment
              Gateways (PayPal, etc.)
            </li>
          </ul>
        </div>

        {/* Database */}
        <div>
          <TextHighlight>Databases</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Relational</TextHighlight> – MySQL, PostgreSQL
            </li>
            <li>
              <TextHighlight>NoSQL</TextHighlight> – MongoDB
            </li>
          </ul>
        </div>

        {/* DevOps */}
        <div>
          <TextHighlight>DevOps, Deployment & Cloud</TextHighlight>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <TextHighlight>Containerization & Orchestration</TextHighlight> –
              Docker, Kubernetes
            </li>
            <li>
              <TextHighlight>Cloud Services</TextHighlight> – AWS (EC2, S3, IAM)
            </li>
            <li>
              <TextHighlight>CI/CD Pipelines</TextHighlight> – GitLab CI/CD,
              GitHub Actions, Jenkins
            </li>
            <li>
              <TextHighlight>Monitoring & Observability</TextHighlight> –
              Dynatrace, Grafana, Splunk
            </li>
            <li>
              <TextHighlight>Secrets & Registry Management</TextHighlight> –
              HashiCorp Vault, Harbor Registry
            </li>
            <li>
              <TextHighlight>Workflow Orchestration</TextHighlight> – Apache
              Airflow
            </li>
            <li>
              <TextHighlight>API Testing & Debugging</TextHighlight> – Postman
            </li>
          </ul>
        </div>

        {/* Git */}
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
