// src/pages/Faq.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Faq.css";

const faqs = [
  {
    q: "What is DDSA?",
    a: "DDSA is a platform that connects communities with essential digital services through a network of trained agents and ambassadors. It enables access to services like bill payments, account opening, and more, right from your neighbourhood.",
    source: "DDSA Knowledge Base",
  },
  {
    q: "Is DDSA free to join?",
    a: "Yes. There’s no signup fee to join as an Agent or Ambassador. Agents can still upgrade to Premium or Ultimate to access better jobs.",
    source: "DDSA Knowledge Base",
  },
  {
    q: "What do I need to get started?",
    a: "A smartphone, a stable internet connection, a valid phone number or email, and the willingness to serve and earn.",
    source: "DDSA Knowledge Base",
  },
  {
    q: "Is DDSA available in all locations?",
    a: "DDSA is expanding rapidly, but coverage depends on your region. If you're unsure, contact support or try signing up—you'll be notified if your area isn't supported yet.",
    source: "DDSA Knowledge Base",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-5 faq-wrap position-relative">
      {/* gentle background tint */}
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">Answers to common questions about DDSA.</p>
        </div>

        <div className="mx-auto" style={{ maxWidth: 820 }}>
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <motion.div
                key={i}
                className={`faq-card shadow-sm ${active ? "active" : ""}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className="faq-btn"
                  onClick={() => setOpen(active ? null : i)}
                  aria-expanded={active}
                >
                  <span className="q">{item.q}</span>
                  <motion.span
                    className="chev"
                    animate={{ rotate: active ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    ▾
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      className="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="mb-2">{item.a}</p>
                      <div className="small text-muted">Source: {item.source}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
