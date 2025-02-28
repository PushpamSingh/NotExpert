import { FaJava } from "react-icons/fa";
import { PiTreeStructure } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlinePython } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { CiDesktop } from "react-icons/ci";
import { NavLink } from "react-router";
import { GrLinkNext } from "react-icons/gr";
export const PlacementCourseCard=({currEle})=>{
    const iconObj={
        FaJava:<FaJava className='placeCourseIcon'/>,
        CgWebsite:<CgWebsite className='placeCourseIcon'/>,
        AiOutlinePython:<AiOutlinePython className='placeCourseIcon'/>,
        PiTreeStructure:<PiTreeStructure className='placeCourseIcon'/>,
        GoDatabase:<GoDatabase className='placeCourseIcon'/>,
        CiDesktop:<CiDesktop className='placeCourseIcon'/>
    }
    return (<>
        <div className="placement-course-card">
            <div className="div-card-icon">
                {iconObj[currEle.icon]}
            </div>
            <div className="div-card-details">
                    <h1>
                       {/* <GrLinkNext className="next-btn"/> */}
                        <span>{currEle.h1}</span>
                    </h1>
                    <p>
                    <GrLinkNext className="next-btn"/>
                        <span>{currEle.p}</span>
                    </p>
            </div>
            <div className="div-card-btn">
                <NavLink to={currEle.material} className="card-btn">
                        Explore
                </NavLink>
                <NavLink to={currEle.roadmap} className="card-btn roadmap-btn">
                        Roadmap
                </NavLink>
            </div>
        </div>
    </>)
}