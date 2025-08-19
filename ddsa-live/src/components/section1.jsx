// Section1.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Section1.css";
import featureImage from "../assets/illustrative-images/section1.png";

const Section1 = () => {
  const textContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const textItem = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } }
  };

  return (
    <section id="aboutus" className="section1 py-5 position-relative overflow-hidden">
      {/* Floating bubbles */}
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 40,
          height: 40,
          background: "rgba(217, 4, 41, 0.08)",
          top: "5%",
          left: "5%",
        }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 35,
          height: 35,
          background: "rgba(217, 4, 41, 0.12)",
          bottom: "10%",
          right: "10%",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 25,
          height: 25,
          background: "rgba(217, 4, 41, 0.06)",
          top: "25%",
          right: "20%",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          {/* Text Content */}
          <motion.div
            className="col-lg-5"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="fw-bold display-5 mb-4" variants={textItem}>
              Empowering the Next Generation of Sales Leaders
            </motion.h2>

            <motion.p className="lead text-muted fs-5 mb-4" variants={textItem}>
              DDSA is a leading platform designed to empower agents, ambassadors, 
              and super agents by providing them with the tools and resources they 
              need to succeed in a competitive market. Our mission is to bridge the 
              gap between traditional sales roles and modern digital tools, making it 
              easier for our users to manage their operations, track their performance, 
              and grow their influence.
            </motion.p>

            <motion.a
              href="#"
              className="btn btn-danger px-4 py-2 fw-semibold rounded-pill"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div className="col-lg-6 text-center">
            <motion.img
              src={featureImage}
              alt="DDSA Feature"
              className="img-fluid rounded shadow-lg"
              initial={{ x: 50, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
