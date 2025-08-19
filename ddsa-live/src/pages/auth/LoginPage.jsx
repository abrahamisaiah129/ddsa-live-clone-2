// src/pages/Login.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react"; // 👈 Import icons
import '../../styles/Auth.css';
import Image from '../../assets/illustrative-images/section7.png';

const SIDE_PANEL_IMG_URL = Image;
export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section className="auth-wrap">
      {/* Background bubbles */}
      <motion.span
        className="bubble bubble-sm"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.span
        className="bubble bubble-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Side panel */}
          <motion.div
            className="col-lg-6"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="side-panel">
              <img src={SIDE_PANEL_IMG_URL} alt="Login banner" className="img-cover" />
              <div className="overlay" />
              <div className="panel-content">
                <motion.h2
                  className="display-6 fw-bold mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Digitally Empowering <span className="brand">Sales Agents</span>, Everywhere!
                </motion.h2>
                <motion.p
                  className="lead mb-0"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                >
                  Real-time insights, lead tracking, and performance metrics — all in one clean dashboard.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            className="col-lg-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="card auth-card shadow-lg border-0">
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-3 text-center">Welcome Back</h3>
                <p className="text-muted text-center mb-4">
                  Sign in to continue to your DDSA dashboard.
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <motion.div
                    className="mb-3"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="you@example.com"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="mb-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="form-label">Password</label>
                    <div className="position-relative">
                      <input
                        type={showPw ? "text" : "password"}
                        className="form-control form-control-lg pe-5"
                        placeholder="••••••••"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                      {/* 👁 Toggle Button */}
                      <button
                        type="button"
                        className="btn btn-sm btn-link position-absolute top-50 end-0 translate-middle-y me-2 p-0"
                        onClick={() => setShowPw((s) => !s)}
                      >
                        {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </motion.div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <a href="#" className="small text-danger text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-danger btn-lg w-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Login
                  </motion.button>
                </form>

                <p className="mt-4 text-center small">
                  Don’t have an account?{" "}
                  <a href="/signup" className="text-danger text-decoration-none fw-semibold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
