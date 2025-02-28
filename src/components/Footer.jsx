import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router";
import './header.css'
export const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="footer-div">
          <section className="contact-footer">
            <div className="contact">
              <h1>Contact Us</h1>
              <div className="contact-flex">
                <p>
                    <RiAdminFill className="admin"/>
                    <span>Ankit Soni</span>
                </p>
                <p>
                  <BsTelephone className="telephone" />
                  <span>+91 62074 59467</span>
                </p>
                <p>
                  <MdOutlineEmail />
                  <span>ankitsoni7544@gmail.com</span>
                </p>
                <p>
                  <MdOutlineLocationOn />
                  <span>123 Indrapuri, Ranchi</span>
                </p>
              </div>
            </div>

            <div className="Quick-Link">
              <h1>Quick Links</h1>
              <div className="quick-flex">
                <NavLink
                  to="/about"
                  className="link"
                >
                  About
                </NavLink>

                <NavLink
                  to="/courses"
                  className="link"
                >
                  Courses
                </NavLink>

                <NavLink
                  to="/placements"
                  className="link"
                >
                  Placements
                </NavLink>

                <NavLink
                  to="/gallery"
                  className="link"
                >
                  Gallery
                </NavLink>
              </div>
            </div>

            <div className="Newletter">
                <h1>NewsLetter</h1>

                  <form className="newsletter-form">
                        <label htmlFor="email">Subscribe to our Newsletter for updates</label>
                        <div className="input-form">
                            <input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="Enter your Email"
                            required
                            />
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                  </form>
            </div>
          </section>

          <section className="copyright-footer">
            <h3>© 2025 NOTExpert. All rights reserved.</h3>
          </section>
        </div>
      </section>
    </>
  );
};
