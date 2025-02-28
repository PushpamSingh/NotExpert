import { GrLinkNext } from "react-icons/gr";
import { NavLink } from "react-router";
export const AptitudePlacement=({curr})=>{
    return (
        <>
        <div className='aptitute-Card placement-mid1-section-div-card'>
             <h1>{curr.h1}</h1>
             <p>
                 <GrLinkNext className='next-btn'/>
                 <p>{curr.p}</p>
                 </p>
             <NavLink to={curr.material} className="Apti-card-btn">Explore</NavLink>
        </div>
        </>
     )
}