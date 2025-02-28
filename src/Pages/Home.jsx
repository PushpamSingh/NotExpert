import { GrLinkNext } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { NavLink } from "react-router";
import homeMid from "../ApiJson/homeMid.json";
import "./PagesCss/HomeAbout.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Home = () => {
    const midSectionRef = useRef(null);
    const bottomRef=useRef(null);
    const {ref, inView} = useInView({
        threshold:0.4
    })
    const {ref:ref1,inView:inView1}=useInView({
        threshold:0.4
    })
    useEffect(() => {
        const cards = gsap.utils.toArray(".home-mid-section-div-card");
    
        if (inView) {
            // First Card Animation
            gsap.fromTo(
                cards[0],
                {
                   opacity:0.2,
                   y:400,
                   scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.3, // Longer duration for smoother motion
                stagger: 0.3, // Slightly faster stagger for better flow
                ease: "power4.out", // Smoother easing curve
                // clearProps: "all"
                }
            );
    
            // Second Card Animation
            gsap.fromTo(
                cards[1],
                 {
                   opacity:0.5,
                   y:400,
                   scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.3, // Longer duration for smoother motion
                    stagger: 0.3, // Slightly faster stagger for better flow
                    ease: "power4.out", // Smoother easing curve
                    // clearProps: "all" // Smoother easing
                }
            );
    
            // Third Card Animation
            gsap.fromTo(
                cards[2],
                {
                    opacity:0.5,
                    y:400,
                    scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.3, // Longer duration for smoother motion
                    stagger: 0.3, // Slightly faster stagger for better flow
                    ease: "power4.out", // Smoother easing curve
                    // clearProps: "all"
                }
            );
        } else {
            // Instantly set opacity to 0 when not in view
            cards.forEach((card) => {
                gsap.set(card, {
                    opacity: 0,
                    y: 200, // Reset position if needed
                    scale:0.95
                });
            });
        }
    }, [inView]);

    useEffect(()=>{
        const cards = gsap.utils.toArray(".home-bottom-section-div-card");
        // console.log(inView1);
        
        if (inView1) {
            // First Card Animation
            gsap.fromTo(
                cards[0],
                {
                   opacity:0.2,
                   y:400,
                   scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.4, // Longer duration for smoother motion
                stagger: 0.3, // Slightly faster stagger for better flow
                ease: "power4.out", // Smoother easing curve
                // clearProps: "all"
                }
            );
    
            // Second Card Animation
            gsap.fromTo(
                cards[1],
                 {
                   opacity:0.5,
                   y:400,
                   scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.4, // Longer duration for smoother motion
                    stagger: 0.3, // Slightly faster stagger for better flow
                    ease: "power4.out", // Smoother easing curve
                    // clearProps: "all" // Smoother easing
                }
            );
    
            // Third Card Animation
            gsap.fromTo(
                cards[2],
                {
                    opacity:0.5,
                    y:400,
                    scale:0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale:1,
                    duration: 0.4, // Longer duration for smoother motion
                    stagger: 0.3, // Slightly faster stagger for better flow
                    ease: "power4.out", // Smoother easing curve
                    // clearProps: "all"
                }
            );
        } else {
            // Instantly set opacity to 0 when not in view
            cards.forEach((card) => {
                gsap.set(card, {
                    opacity: 0,
                    y: 400, // Reset position if needed
                    scale:0.95
                });
            });
        }
    },[inView1])
    

    const iconObj = {
        FiBookOpen: <FiBookOpen className="midicon" />,
        LuUsers: <LuUsers className="midicon" />,
        GoTrophy: <GoTrophy className="midicon" />,
    };

    return (
        <>
            <section className="home-section">
                {/* Top Section */}
                <section className="home-top-section">
                    <div className="home-top-section-div">
                        <LuGraduationCap className="bounceIcon" />
                        <h1 className="home-top-text">Your Gateway to Academic Excellence</h1>
                        <p>Comprehensive study materials and guidance for BCA, BSc IT, and BCS students</p>
                        <NavLink to="/courses" className="explorebtn-top">
                            <span className="explore-text">Explore Courses</span>
                            <GrLinkNext className="next-btn" />
                        </NavLink>
                    </div>
                </section>

                {/* Mid Section */}
                <section ref={ref} className="home-mid-section">
                    <div ref={midSectionRef} className="home-mid-section-div">
                        {homeMid.map((curr) => {
                            return (
                                <div key={curr.id} className="home-mid-section-div-card opacity-0 ">
                                    <span>{iconObj[curr.icon]}</span>
                                    <h1>{curr.h1}</h1>
                                    <p>{curr.p}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Bottom Section */}
                <section ref={ref1} className="home-bottom-section">
                    <h1 className="top-h1">Our Courses</h1>
                    <div ref={bottomRef} className="home-bottom-section-div">
                        {[
                            {
                                id: 1,
                                h1: "BCA",
                                p1: "Notes / Pyq's",
                                p2: "Proper and clean PYQ's",
                                p3: "Great Guidance",
                            },
                            {
                                id: 2,
                                h1: "BSC IT",
                                p1: "Notes / Pyq's",
                                p2: "Proper and clean PYQ's",
                                p3: "Great Guidance",
                            },
                            {
                                id: 3,
                                h1: "BCS",
                                p1: "Notes / Pyq's",
                                p2: "Proper and clean PYQ's",
                                p3: "Great Guidance",
                            },
                        ].map((curr) => {
                            return (
                                <div key={curr.id} className="home-bottom-section-div-card">
                                    <h1>{curr.h1}</h1>
                                    <p>
                                        <GrLinkNext className="bott-icon" />
                                        <span>{curr.p1}</span>
                                    </p>
                                    <p>
                                        <GrLinkNext className="bott-icon" />
                                        <span>{curr.p2}</span>
                                    </p>
                                    <p>
                                        <GrLinkNext className="bott-icon" />
                                        <span>{curr.p3}</span>
                                    </p>
                                    <NavLink to={`/courses/${curr.id===1?'BCA':curr.id===2?'BSCIT':'BCS'}`} className="explorebtn-bott">
                                        Explore
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </>
    );
};
