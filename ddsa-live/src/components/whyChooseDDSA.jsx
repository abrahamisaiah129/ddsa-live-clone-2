// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WhyChooseDDSA.css";

import section1 from "../assets/illustrative-images/section1.png";
import section2 from "../assets/illustrative-images/section2.png";
import section3 from "../assets/illustrative-images/section3.png";
import section4 from "../assets/illustrative-images/section4.png";
import section5 from "../assets/illustrative-images/section5.png";

const sections = [
  {
    id: 1,
    title: "Instant Wallet Access",
    description:
      "Gain immediate visibility and control over your finances with real-time wallet access, secure transactions, and a complete earnings history.",
    image: section1,
  },
  {
    id: 2,
    title: "Performance Analytics",
    description:
      "Track your growth and performance instantly with detailed analytics and reporting tools designed to help you improve and achieve your goals.",
    image: section2,
  },
  {
    id: 3,
    title: "Task Management Tools",
    description:
      "Stay organized and efficient with intuitive dashboards, smart task allocation, and timely alerts to help you prioritize what matters most.",
    image: section3,
  },
  {
    id: 4,
    title: "Comprehensive Training",
    description:
      "Access expert support and resources to overcome challenges, develop new skills, and consistently improve your performance.",
    image: section4,
  },
  {
    id: 5,
    title: "Advanced Analytics",
    description:
      "Harness advanced analytics to gain deeper insights, compare against benchmarks, and make informed decisions that drive results.",
    image: section5,
  },
];

const WhyChooseDDSA = () => {
  return (
    <section id="benefits" className="why-choose-ddsa py-5 position-relative">
      <div className="container position-relative">
        {/* Timeline vertical line */}
        <motion.div
          className="timeline-line d-none d-lg-block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {sections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={section.id}
              className={`row align-items-center g-5 mb-5 section-row ${
                isEven ? "" : "flex-lg-row-reverse"
              }`}
            >
              {/* Text */}
              <div className="col-lg-6 text-content">
                <motion.div
                  initial={{ x: isEven ? -80 : 80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Number Badge */}
                  <motion.div
                    className="section-number  mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    {section.id}/5
                  </motion.div>

                  <motion.h3
                    className="fw-bold mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {section.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted fs-5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {section.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Image */}
              <div className="col-lg-6 text-center image-content">
                <motion.img
                  src={section.image}
                  alt={`section ${section.id}`}
                  className="img-fluid rounded shadow-lg"
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseDDSA;
