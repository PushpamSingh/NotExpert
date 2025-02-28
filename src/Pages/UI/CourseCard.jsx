import { FiBookOpen } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import {NavLink} from 'react-router'
export const CourseCard=({currEle})=>{
    const iconObj={
        FiBookOpen:<FiBookOpen className='card-testi-icon'/>,
        FiFileText:<FiFileText className='card-testi-icon'/>,
        IoMdHelpCircleOutline:<IoMdHelpCircleOutline className='card-testi-icon'/>,
       
    }
    return (
        <div className="course-card">
        <div className='course-card-head'>
            <h1>{currEle.h1}</h1>
            <p>{currEle.p}</p>
        </div>

        <div className='course-card-testi'>
            {
                [
                    {
                        "icon":"FiBookOpen",
                        "h1":"Study Materials",
                        "p":"Comprehensive notes and tutorials"
                    },
                    {
                        "icon":"FiFileText",
                        "h1":"Previous Year Papers",
                        "p":"Solved question papers with explanations"  
                    },
                    {
                        "icon":"IoMdHelpCircleOutline",
                        "h1":"Expert Support",
                        "p":"Solved question papers with explanations"  
                    }
                ].map((curr)=>{
                    return (
                        <div className='course-card-testi-1'>
                            <h1>
                                <span>{iconObj[curr.icon]}</span>
                                {curr.h1}
                            </h1>
                            <p className="text-[#494646]">{curr.p}</p>
                        </div>
                    )
                })
            }
            
        </div>

        <div className='course-card-subject'>
                <h1>Key Subjects</h1>
                <ul className='keysubjects'>
                    <li><NavLink to={currEle.li1link} className='nav-color'>{currEle.li1}</NavLink></li>
                    <li><NavLink to={currEle.li2link} className='nav-color'>{currEle.li2}</NavLink>
                        </li>
                    <li><NavLink to={currEle.li3link} className='nav-color'>{currEle.li3}</NavLink>
                        </li>
                    <li><NavLink to={currEle.li4link} className='nav-color'>{currEle.li4}</NavLink>
                        </li>
                    <li><NavLink to={currEle.li5link} className='nav-color'>{currEle.li5}</NavLink>
                        </li>
                </ul>
        </div>
        <div className='course-card-btn'>
            <NavLink to={`${currEle.access}`} className='course-card-nav'>Access Materials</NavLink>
        </div>
    </div> 

    )
}