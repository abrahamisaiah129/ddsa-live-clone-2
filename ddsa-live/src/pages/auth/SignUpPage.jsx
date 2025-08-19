// src/pages/Signup.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/auth.css";
import sampleImg from '../../assets/illustrative-images/section7.png';
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");

  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    orgName: "",
    orgEmail: "",
    orgSize: "",
  });

  // password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = ["Select Type", "Fill Form", "Finish"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final form data:", { accountType, ...formData });
    nextStep();
  };

  return (
    <div className="auth-wrap d-flex align-items-center justify-content-center p-3">
      <div className="bubble bubble-sm"></div>
      <div className="bubble bubble-lg"></div>

      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left Side Panel */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="side-panel">
              <img src={sampleImg} alt="cover" className="img-cover" />
              <div className="overlay"></div>
              <div className="panel-content">
                <h2 className="fw-bold display-6 brand">DDSA</h2>
                <p className="lead">
                  Create your account and join our platform — choose Individual
                  or Organization.
                </p>
              </div>
            </div>
          </div>

          {/* Right Auth Card */}
          <div className="col-lg-6">
            <div className="auth-card p-4 shadow-lg">
              {/* Progress bar */}
              <div className="d-flex justify-content-between mb-4">
                {steps.map((s, i) => (
                  <div key={i} className="text-center flex-fill">
                    <div
                      className={`rounded-circle mx-auto mb-1 d-flex align-items-center justify-content-center`}
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: i + 1 <= step ? "#d90429" : "#dee2e6",
                        color: i + 1 <= step ? "#fff" : "#6c757d",
                      }}
                    >
                      {i + 1}
                    </div>
                    <small
                      className={`fw-semibold ${
                        i + 1 <= step ? "text-danger" : "text-muted"
                      }`}
                    >
                      {s}
                    </small>
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="fw-bold mb-3 text-center">
                      Choose Account Type
                    </h4>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                      <div
                        className={`option-card ${
                          accountType === "individual" ? "active" : ""
                        }`}
                        onClick={() => setAccountType("individual")}
                      >
                        <div className="option-icon">👤</div>
                        <div className="mt-2 fw-semibold">Individual</div>
                        <small className="text-muted">
                          Personal account for individuals.
                        </small>
                      </div>
                      <div
                        className={`option-card ${
                          accountType === "organization" ? "active" : ""
                        }`}
                        onClick={() => setAccountType("organization")}
                      >
                        <div className="option-icon">🏢</div>
                        <div className="mt-2 fw-semibold">Organization</div>
                        <small className="text-muted">
                          Manage your business or team.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button
                        onClick={nextStep}
                        disabled={!accountType}
                        className={`btn btn-danger px-4 fw-semibold ${
                          !accountType ? "disabled" : ""
                        }`}
                      >
                        Next →
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="fw-bold mb-3 text-center">
                      {accountType === "individual"
                        ? "Individual Signup"
                        : "Organization Signup"}
                    </h4>

                    <form className="row g-3" onSubmit={handleSubmit}>
                      {accountType === "individual" ? (
                        <>
                          <div className="col-12">
                            <input
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-12 position-relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                            <button
                              type="button"
                              onClick={togglePassword}
                              className="toggle-eye"
                            >
                              {showPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-12">
                            <input
                              type="text"
                              name="orgName"
                              placeholder="Organization Name"
                              value={formData.orgName}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="email"
                              name="orgEmail"
                              placeholder="Official Email"
                              value={formData.orgEmail}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-12">
                            <select
                              name="orgSize"
                              value={formData.orgSize}
                              onChange={handleChange}
                              className="form-select"
                              required
                            >
                              <option value="">Select size</option>
                              <option value="1-10">1–10 members</option>
                              <option value="11-50">11–50 members</option>
                              <option value="51-200">51–200 members</option>
                              <option value="201-500">201–500 members</option>
                              <option value="500+">500+ members</option>
                            </select>
                          </div>
                          <div className="col-12 position-relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                              className="form-control"
                              required
                            />
                            <button
                              type="button"
                              onClick={togglePassword}
                              className="toggle-eye"
                            >
                              {showPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </>
                      )}

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="btn btn-outline-secondary"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger fw-semibold"
                        >
                          Next →
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <h4 className="fw-bold mb-3">🎉 Signup Complete!</h4>
                    <p className="text-muted">
                      Your <b>{accountType}</b> account has been created
                      successfully.
                    </p>
                    <button className="btn btn-danger fw-semibold mt-3">
                      Go to Dashboard →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
