import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Header.css";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "aboutus" },
  { name: "Benefits", id: "benefits" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  const getOffset = () =>
    -((document.querySelector(".navbar")?.offsetHeight || 72) + 8);

  const smoothScrollTo = useCallback((id) => {
    scroller.scrollTo(id, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: getOffset(),
    });
  }, []);

  const handleNavClick = async (id) => {
    // Close mobile collapse if open
    const collapseEl = document.getElementById("navbarNav");
    if (collapseEl?.classList.contains("show") && window.bootstrap) {
      new window.bootstrap.Collapse(collapseEl).hide();
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // wait for home to mount, then scroll
      requestAnimationFrame(() => {
        setTimeout(() => smoothScrollTo(id), 250);
      });
    } else {
      smoothScrollTo(id);
    }
  };

  // Observe sections when on home to update active underline
  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = NAV_ITEMS.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        // keeps the observed "center" band under the navbar
        root: null,
        rootMargin: `-${Math.abs(getOffset())}px 0px -55% 0px`,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
     
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-75 shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Logo Left */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-danger"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 230 170"
            fill="none"
          >
            <path
              d="M193.605 0.514648L200.536 0.972656C218.635 2.17088 231.089 19.6648 226.297 37.1592L206.396 128.676C201.482 151.271 181.491 167.39 158.368 167.404L0.670929 167.5L37.1123 0.5L193.605 0.514648ZM27.3887 45.6748L65.8282 45.6484L45.9492 135.463L60.1358 135.226L79.8594 45.6377L118.174 45.6152L98.5567 134.398L102.912 134.612C108.736 134.899 113.928 130.966 115.226 125.281L133.266 46.2031C134.789 39.5226 129.679 33.4417 123.221 33.332V33.3203L29.9893 33.2617L27.3887 45.6748ZM185.995 46.3955C187.588 39.2578 181.731 32.6524 174.454 33.3799L151.992 134.989L154.914 135.138C161.352 135.462 167.087 131.098 168.491 124.808L185.995 46.3955Z"
              fill="#E70A02"
              fillOpacity="0.9"
            />
          </svg>
          <span className="ms-2 fs-5">DDSA</span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Centered nav links */}
        <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
          <ul className="navbar-nav mx-auto justify-content-center gap-lg-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link custom-nav-link btn shadow-none btn-link p-0 ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right buttons */}
        <div className="d-flex">
          <Link
            className="btn btn-outline-danger fw-semibold px-3 me-2 custom-btn"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="btn btn-danger fw-semibold px-3 custom-btn"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
