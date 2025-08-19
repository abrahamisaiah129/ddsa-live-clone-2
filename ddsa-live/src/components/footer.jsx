import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import '../styles/Footer.css';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small">
              {[
                "Home",
                "Benefits",
                "Pricing",
                "About Us",
                "FAQ",
                "Help Center",
              ].map((text, i) => (
                <li key={i}>
                  <ScrollLink
                    to={text.toLowerCase().replace(" ", "")}
                    smooth={true}
                    duration={600}
                    offset={-70} // adjust for sticky navbar
                    className="footer-link"
                  >
                    {text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="col-md-3">
            <h5>Policies</h5>
            <ul className="list-unstyled small">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Individual Onboarding Policy</li>
              <li>Organisation Onboarding Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5>Contact</h5>
            <p className="small mb-1">info@ddsa-live.com</p>
            <p className="small">+234 703 5874 823</p>
          </div>

          {/* Branding */}
          <div className="col-md-3 text-md-end">
            <h5>Become an Agent Today</h5>
            <button className="btn btn-danger btn-sm mt-2" onClick={() => navigate("/signup")}>Onboard Now</button>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="small text-center mb-0">
          © 2025 D-Degree Digital Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
