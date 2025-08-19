// Hero.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/hero.css"; // for extra styles if needed
import bank1 from "../assets/bank-images/bank1.png";
import bank2 from "../assets/bank-images/bank2.png";
import bank3 from "../assets/bank-images/bank3.png";
// import bank4 from "../assets/bank-images/bank4.svg";
import bank5 from "../assets/bank-images/bank5.svg";
import bank6 from "../assets/bank-images/bank6.svg";
import bank7 from "../assets/bank-images/bank7.svg";
import bank8 from "../assets/bank-images/bank8.png";
import bank9 from "../assets/bank-images/bank9.svg";


const Hero = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center vh-100 position-relative overflow-hidden"
      style={{ backgroundColor: "#fff", color: "#d90429" }}
    >
      {/* Background Animated Circles */}
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 320,
          height: 320,
          background: "rgba(217, 4, 41, 0.08)",
          top: "-120px",
          left: "-120px",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 220,
          height: 220,
          background: "rgba(217, 4, 41, 0.12)",
          bottom: "-60px",
          right: "-60px",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="container position-relative">
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Digitally Empowering{" "}
          <span style={{ color: "#d90429" }}>Sales Agents</span>, Everywhere!
        </motion.h1>

        <motion.p
          className="lead text-muted fs-5 mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join our <strong>Agent Network System (ANS)</strong> to unlock new
          opportunities and grow your influence in a vast, thriving market.
        </motion.p>

        {/* CTA Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <motion.a
            href="#"
            className="btn btn-danger px-4 py-2 fw-semibold rounded-pill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become an Agent Today
          </motion.a>
          <motion.a
            href="#"
            className="btn btn-outline-danger px-4 py-2 fw-semibold rounded-pill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>

        {/* Agent Types */}
        <motion.div
          className="d-flex justify-content-center flex-wrap gap-4 mb-5 fw-semibold text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <span>Super Agent</span>
          <span>Agents</span>
          <span>Ambassador Agent</span>
        </motion.div>

        {/* Scrolling client logos */}
        <div className="w-100 overflow-hidden mt-5">
  <motion.div
    className="d-flex flex-nowrap"
    animate={{ x: ["100%", "-100%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank7} alt="logo7" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank7} alt="logo7" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank7} alt="logo7" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank7} alt="logo7" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    <img src={bank1} alt="logo1" className="bank-logo px-2" />
    <img src={bank2} alt="logo2" className="bank-logo px-2" />
    <img src={bank3} alt="logo3" className="bank-logo px-2" />
    <img src={bank5} alt="logo5" className="bank-logo px-2" />
    <img src={bank6} alt="logo6" className="bank-logo px-2" />
    <img src={bank7} alt="logo7" className="bank-logo px-2" />
    <img src={bank8} alt="logo8" className="bank-logo px-2" />
    <img src={bank9} alt="logo9" className="bank-logo px-2" />
    {/* Repeat if needed for smooth scrolling */}
  </motion.div>
</div>


      </div>
    </section>

    

  );
}

export default Hero;
