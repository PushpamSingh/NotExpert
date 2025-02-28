import developer from "../ApiJson/Developer.json";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
export const Developers = () => {
  return (
    <section className="w-full">
      <div className="w-[80%] max-sm:w-[95%] mx-auto button-p flex flex-col justify-center items-center margin-top border-b-1 border-gray-500 padding-b">
        <h1 className="m-b-3 text-3xl font-[800] drop-shadow-[1px_1px_2px_black] tracking-[.2rem]">
          DEVELOPER
        </h1>

        <div className="w-[40%] max-md:w-[70%] max-sm:w-full group shadow-[2px_2px_6px_gray,-2px_-2px_6px_gray] rounded-2xl m-b-4">
          <div className="flex flex-col gap-4 justify-center items-center button-p">
            <img
              src="https://notexpert.netlify.app/images/AI.jpg"
              alt="Ankit Soni"
              //   width={200}
              className="rounded-full h-[170px] w-[180px]  transition-border duration-700 border-7 border-white group-hover:border-red-600"
            />
            <h1 className="text-2xl font-[700] text-red-600">ANKIT VERMA</h1>
            <p className="text-center text-gray-600">
              Hii👋 I am Ankit Verma, An enthusiast and passinate about coding
              and development student of IT stream.. always ready to acquire new
              skills, love to work in a team.. and goal is to get a good
              position in Software Industry also add value to the people as much
              as i can.
            </p>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/ankit-kumar-85aaaa202/" className="">
                <FaLinkedinIn className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
              <a href="https://twitter.com/Ankitverma10012">
                <TbBrandTwitter className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
              <a href="https://github.com/ankitkumar6207">
                <FaGithub className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100061507893120">
                <FaFacebookF className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
              <a href="https://ankit100.bio.link/">
                <RiComputerLine className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
              <a href="mailto:ankitsoni7544@gmail.com">
                <MdOutlineMailOutline className="text-red-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" text-center m-t-2 m-b-3">
          <h1 className="m-b-3 text-3xl font-[800] drop-shadow-[1px_1px_2px_black] tracking-[.2rem] underline decoration-cyan-600 decoration-[0.4rem]">
            CONTRIBUTERS
          </h1>
        </div>
        <div>
          <ul className="w-[80%] mx-auto grid grid-cols-3 gap-6 m-b-4 max-md:grid-cols-1 max-lg:grid-cols-2">
            {developer.map((curr, index) => {
              return (
                <li className="group shadow-[2px_2px_6px_gray,-2px_-2px_6px_gray] rounded-2xl h-[100%]">
                  <div className="flex flex-col gap-4 items-center button-p">
                    <img
                      src={curr.img}
                      alt="Ankit Soni"
                      //   width={200}
                      className="rounded-full h-[170px] w-[180px]  transition-border duration-700 border-7 border-white group-hover:border-cyan-600"
                    />
                    <h1 className="text-2xl font-[700] text-cyan-600">
                      {curr.name.toUpperCase()}
                    </h1>
                    <p className="text-center text-gray-600">
                      {curr.introduction}
                    </p>

                    <div className="flex gap-6">
                      <a href={curr.linkedIn}>
                        <FaLinkedinIn className="text-cyan-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
                      </a>
                      <a href={curr.twitter || curr.Instagram}>
                        {curr.twitter?
                         (<TbBrandTwitter className="text-cyan-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />)
                         :<FaInstagram className="text-cyan-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />}
                      </a>
                      <a href={curr.email}>
                        <MdOutlineMailOutline className="text-cyan-600 text-2xl w-full transition-all duration-200 ease-in hover:scale-[1.4]" />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
