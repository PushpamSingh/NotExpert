import { LuGraduationCap } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
// import { FiCheckCircle } from "react-icons/fi";
import { RiShieldUserLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import { GoImage } from "react-icons/go";
import { IoCodeSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import "./header.css";
import { useState } from "react";
export const Header = () => {
  const [active, setActive] = useState(false);
  const handeltogglemenu=()=>{
    setActive(false)
  }
  return (
    <>
      <section className="header-section">
        <div className="header-div">
          <NavLink to="/" className="Notelogo">
            <LuGraduationCap className="garuationCap" />
            <h1>NOTExpert</h1>
          </NavLink>

          <nav className={active ? "ham-active" : "header-nav"}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <LuGraduationCap className="Icon"/>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <LuUsers className="Icon"/>
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <FiBookOpen className="Icon"/>
                  <span>Courses</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/placements"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <FiAward className="Icon"/>
                  <span>Placements</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <RiShieldUserLine className="Icon"/>
                  <span>Testimonials</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <GoImage className="Icon"/>
                  <span>Gallery</span>
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/developers"
                  className={({ isActive }) => {
                    return isActive ? "activelink nav-flex" : "link nav-flex";
                  }}
                  onClick={handeltogglemenu}
                >
                  <IoCodeSharp className="Icon"/>
                  <span>Developers</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hamburgur-div">
            <GiHamburgerMenu
              className="hamburgur"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </section>
    </>
  );
};
