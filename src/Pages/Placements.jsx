import './PagesCss/CoursesPlace.css'

import Aptitude from '../ApiJson/Aptitude.json'
import company from '../ApiJson/company.json'
import placementCourse from '../ApiJson/placementCourse.json';
import { PlacementCourseCard } from './UI/PlacementCourseCard';
import { NavLink } from 'react-router';
import { AptitudePlacement } from './UI/AptitudePlacement';
import { IoMdCheckbox } from "react-icons/io";
import { MdNotInterested } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import DoList from '../ApiJson/MustDo.json';
import DontList from '../ApiJson/MustDont.json';

export const Placements=()=>{
    return (<>
        <section className="placement-section course-section">
                <section className="placement-top-section course-top-section">
                     <div className="placement-top-section-div course-top-section-div">
                             <FiAward className='bounceIcon1'/>
                            <h1>Complete Placement Preparation</h1>
                            <p>Connecting talented students with leading companies</p>
                     </div>
                </section>

                <section className="placement-mid1-section">
                <div className='placement-mid1-section-h1-div'>
                <h1 className='Coursesh1'>COURSES TO COMPLETE</h1>
                </div>
                    <div className="placement-mid1-section-div">
                        
                            {
                               placementCourse.map((curr,index)=>{
                                return <PlacementCourseCard currEle={curr} key={index}/>
                               })
                            }
                    </div>
                </section>

                <section className="placement-mid2-section placement-mid1-section">
                    <h1 className='aptitudeh1'>APTITUDE ROUND</h1>
                        <div className='placement-mid2-section-div placement-mid1-section-div'>
                            {
                             Aptitude.map((curr,index)=>{
                                    return <AptitudePlacement curr={curr} key={`Apti${index}`}/>
                                })
                            }
                        </div>
                </section>

                <section className="placement-mid3-section placement-mid1-section">
                    
                        <div className='placement-mid3-section-div'>
                        <h1 className='companyh1 Coursesh1'>COMPANIES</h1>
                            <div className='mid3-card'>
                            {
                                company.map((curr,index)=>{
                                    return <NavLink to={curr.link} key={`company${index}`} className="companyLink">{curr.name}</NavLink>
                                })
                            }
                            </div>
                          <h1 className='companyh1-2'>And many more...</h1>
                        </div>
                </section>

                <section className='tips-section placement-mid1-section'>
                    <div className='tips-section-div placement-mid1-section-div'>
                        <div className='tips-mustDo'>
                            <h2 className='mustdoh2'>Must Do's <span><IoMdCheckbox className='doCheckIcon'/></span></h2>
                            {
                                DoList.map((curr)=>{
                                    return (<>
                                        <h2 key={curr.id} className='Dolisth2'>
                                                <span>{curr.id}. {curr.h2}</span>
                                                <a href={curr?.link}> {curr?.a}.</a>
                                        </h2>
                                    </>)
                                })
                            }
                        </div>

                        <div className='tips-MustnotDO'>
                        <h2 className='mustnotdoh2'>Must Dont's <span><MdNotInterested className='doCheckIcon'/></span></h2>
                            {
                                DontList.map((curr)=>{
                                    return (<>
                                        <h2 key={curr.id} className='Dolisth2'>
                                                <span>{curr.id}. {curr.h2}</span>
                                                <a href={curr?.link}> {curr?.a}.</a>
                                        </h2>
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </section>


        </section>
    </>)
}