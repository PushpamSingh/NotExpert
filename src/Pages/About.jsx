import { FiBookOpen } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import about from "../ApiJson/About.json"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import gsap from "gsap";
export const About=()=>{
    const {ref, inView} = useInView({
        threshold:0.4
    })
    useEffect(() => {
        const cards = gsap.utils.toArray(".about-mid1-section-div-card");
    
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
                    duration: 0.6, // Longer duration for smoother motion
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
                    duration: 0.6, // Longer duration for smoother motion
                    stagger: 0.3, // Slightly faster stagger for better flow
                    ease: "power4.out", // Smoother easing curve
                    // clearProps: "all" // Smoother easing
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
    const iconObj={
        FiBookOpen:<FiBookOpen className="about-icon-mid2"/>,
        LuUsers:<LuUsers className="about-icon-mid2"/>,
        FiCheckCircle:<FiCheckCircle className="about-icon-mid2"/>,
        FiAward:<FiAward className="about-icon-mid2"/>,

    }
    return (<>
        <section className="about-section">
            <section className="about-top-section">
            <div className="home-top-section-div">
                    <h1>About NOTExpert</h1>
                    <p>We are dedicated to providing quality education resources and guidance to help students excel in their academic journey.</p>
                </div>
            </section>

            <section ref={ref} className="about-mid1-section">
                <div className="about-mid1-section-div home-mid-section-div">
                        {[
                            {
                                "id":"a1",
                                "h1":"Our Mission",
                                "p":"To empower students with comprehensive study materials and expert guidance, enabling them to achieve academic excellence and build successful careers."
                            },
                            {
                                "id":"a2",
                                "h1":"Our Vision",
                                "p":"To become the leading educational resource platform, recognized for quality content and student success stories across various technical courses."
                            }
                        ].map((curr)=>{
                            return (<>
                                <div className="about-mid1-section-div-card" key={curr.id}>
                                        <h1>{curr.h1}</h1>
                                        <p>{curr.p}</p>
                                </div>
                            </>)
                        })
                        
                        }

                </div>
            </section>

            <section className="about-mid2-section">
                <div className="about-mid2-section-div home-mid-section-div">
                    {
                        about.map((curr)=>{
                            return (<div className="about-mid2-section-div-card">
                                    {iconObj[curr.icon]}
                                    <h1>{curr.h1} <span>{curr.per? "%": "+"}</span> </h1>
                                    <p>{curr.p}</p>
                            </div>)
                        })
                    }
                </div>
            </section>

            <section className="about-bottom-section">
                
                <div className="about-bottom-section-div">
                <h1 className="bottom-h1">Why Choose NOTExpert?</h1>
                <div className="div2">
                        {
                            [
                                {
                                    "h1":"Quality Content",
                                    "p":"Comprehensive and well-structured study materials prepared by experts."
                                },
                                {
                                    "h1":"Expert Guidance",
                                    "p":"Get mentored by experienced professionals and faculty members"
                                },
                                {
                                    "h1":"Student Success",
                                    "p":"Proven track record of helping students achieve their academic goals"
                                }
                            ].map((curr)=>{
                                return(<div className="about-bottom-section-div-card">
                                    <h1>{curr.h1}</h1>
                                    <p>{curr.p}</p>
                                </div>)
                            })
                        }
                        </div>
                </div>

            </section>

        </section>
    </>)
}
// https://bolt.new/~/sb1-ev49ehsh