import { IoLinkOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import { NavLink } from "react-router";
import { LuCodeXml } from "react-icons/lu";
import { TbBinaryTree2 } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";
import { CiDesktop } from "react-icons/ci";
import { PiTreeStructure } from "react-icons/pi";
import { IoGitNetworkOutline } from "react-icons/io5";
export const ImportantLink=()=>{
    return (
            <section className="w-full flex flex-col justify-center items-center">
                <div className="w-[80%] flex flex-col items-center justify-center gap-2 m-8">
                    <h1 className="flex justify-center items-center gap-3 text-3xl font-[700]">
                        <IoLinkOutline className="font-[700] text-[#1E42B2] text-4xl"/>
                        IMPORTANT LINKS
                    </h1>
                    <p className="text-xl text-gray-400">
                    Essential resources for your programming journey
                    
                    </p>
                </div>

                <div className="bg-gray-100 w-full flex justify-center items-center padding">
                    <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 ">
                        <div className="bg-orange-100 border-1 border-orange-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://drive.google.com/file/d/1z3Cl1hkemnIhF56CLWjX4wcjfTDGaiyX/view" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><FiBookOpen className="text-orange-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-orange-800 group-hover:text-blue-800 flex items-center ml-4"> Step by step learning with deadline for all three languages.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>
                        
                        <div className="bg-orange-100 border-1 border-orange-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://www.tpointtech.com/corejava-interview-questions" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><GoLightBulb className="text-orange-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-orange-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                    300 most important java interview questions.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-red-100 border-1 border-red-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://drive.google.com/file/d/1cJ4lly01-jhfltak1cku-3SxDNp1hya2/view" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><LuCodeXml className="text-red-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-red-800 group-hover:text-blue-800 flex items-center ml-4"> Complete begginer coding sheet for new comers in programming stream.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-red-100 border-1 border-red-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://www.tpointtech.com/dbms-interview-questions" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><GoDatabase className="text-red-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-red-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                    Top 50 DBMS questions asked in interview.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-cyan-50 border-1 border-cyan-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://docs.google.com/spreadsheets/d/1h_dQp5I6Pz9HCxY11MZz3mNnCTwOw1Yo/edit?usp=drive_link&ouid=108760223920210722808&rtpof=true&sd=true" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><TbBinaryTree2 className="text-cyan-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-cyan-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                    Complete DSA sheet for practice,This is one of the best sheet.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-cyan-50 border-1 border-cyan-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://www.tpointtech.com/operating-system-interview-questions" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><CiDesktop className="text-cyan-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-cyan-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                        Most asked questions in interview on Operating System.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-green-100 border-1 border-green-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://drive.google.com/file/d/1WQk72WbwVd6fmOKxWQg3rpNxTIwo_2Te/view" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><PiTreeStructure className="text-green-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-green-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                        Summer vacation sheet,practice from this sheet when you are in holidays.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-green-100 border-1 border-green-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://www.tpointtech.com/networking-interview-questions" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><IoGitNetworkOutline className="text-green-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-green-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                    Networking best questions which are usually asked in interviews.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-blue-50 border-1 border-blue-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://drive.google.com/file/d/1ZPOS-U1bXy47Vx75WNnTnvm8k0NJbsjH/view" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><GoDatabase className="text-blue-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-blue-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                    Best downloadable placement oriented cheat sheet for DBMS.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                        <div className="bg-blue-50 border-1 border-blue-400 rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-[1.04] group">
                            <NavLink to="https://www.tpointtech.com/interview-tips" className="flex justify-start items-center gap-3 w-full h-full padding-3">
                                <div><TbBinaryTree2 className="text-blue-800 text-xl font-[600]"/></div>
                                <div>
                                    <h1 className="font-[600] text-[0.9rem] text-blue-800 group-hover:text-blue-800 flex items-center ml-4"> 
                                         Interview tips and tricks to follow to be more presentable.
                                    <IoLinkOutline className="font-[700] text-[#1E42B2] text-xl -rotate-45"/>
                                    </h1>
                                </div>
                                <div><GrLinkNext className="text-[#909090]"/></div>

                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>        
    );
}