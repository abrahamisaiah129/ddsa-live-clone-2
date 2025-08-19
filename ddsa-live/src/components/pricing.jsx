import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const plans = {
  quarterly: [
    {
      title: "Basic",
      price: "₦0/Quarter",
      button: "Start for Free",
      features: [
        "Agent Customer Service",
        "Gamification & Monthly Rewards",
        "BVN/KYC Verification - Basic",
        "Agent Loan Access - Soft",
        "POS Maintenance Tools",
        "Custom Branded URLs",
        "Dedicated Support Line",
        "Vendor Management & API Access",
      ],
    },
    {
      title: "Premium",
      price: "₦18000/Quarter",
      button: "Get Premium",
      features: [
        "Agent Customer Service",
        "Gamification & Monthly Rewards",
        "BVN/KYC Verification - Mid-Level",
        "Agent Loan Access - Mid/High",
        "POS Maintenance Tools",
        "Custom Branded URLs",
        "Dedicated Support Line",
        "Vendor Management & API Access",
      ],
    },
    {
      title: "Ultimate",
      price: "₦36000/Quarter",
      button: "Get Ultimate",
      features: [
        "Agent Customer Service",
        "Gamification & Monthly Rewards",
        "BVN/KYC Verification - Advanced",
        "Agent Loan Access - Preview",
        "POS Maintenance Tools",
        "Custom Branded URLs",
        "Dedicated Support Line",
        "Vendor Management & API Access",
      ],
    },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState("quarterly");

  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Save up to ₦2000 per month by subscribing quarterly</h2>

        {/* Toggle */}
        <div className="btn-group mb-5">
          <button
            className={`btn ${billing === "monthly" ? "btn-outline-danger" : "btn-danger"}`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`btn ${billing === "quarterly" ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => setBilling("quarterly")}
          >
            Quarterly (30% Off)
          </button>
        </div>

        {/* Plans */}
        <div className="row g-4 justify-content-center">
          {plans[billing].map((plan, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h4 className="fw-bold">{plan.title}</h4>
                  <p className="fs-4 text-danger">{plan.price}</p>
                  <button className="btn btn-danger w-100 mb-4">{plan.button}</button>
                  <ul className="list-unstyled text-start small">
                    {plan.features.map((f, j) => (
                      <li key={j} className="mb-2">✔ {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
