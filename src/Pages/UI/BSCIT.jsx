import { useNavigate } from "react-router";
import { GrLinkNext } from "react-icons/gr";

export const BSCIT = () => {
  const navigate = useNavigate();
  return (
      <section className="w-full">
        <div className="w-[80%] mx-auto padding">
          <button
            onClick={() => navigate(-1)}
            className="button-p flex gap-2 items-center bg-green-600 text-white font-[700] rounded-xl cursor-pointer"
          >
            <GrLinkNext className="rotate-180" />
            <p className="max-md:text-white">Go Back</p>
          </button>
        </div>

        <section className="w-[80%] mx-auto padding flex justify-between gap-4 items-center max-md:flex-col max-md:w-full">
          <div className="border-1 padding flex gap-4 w-[80%] bg-[#010101ee] text-white">
            <div className="w-[100%] max-md:w-[0%]">
              <div className="h-full w-[100%] max-md:hidden max-md:w-[0%]">
                <img src="/Notes.webp" alt="" className="w-full h-full max-md:hidden" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-evenly">
              <p className="text-green-600 font-[700]">#Notes</p>
              <h1 className="text-cyan-600 font-[800] text-xl max-sm:text-[14px]">BSC IT Notes</h1>
              <p className="max-sm:text-xs">
                This box containes proper complete downloadable pdf Notes of
                every subject of all semesters of BSC IT.
              </p>
              <button className="text-xl bg-red-600 cursor-pointer border-2 rounded-sm transform-all duration-300 ease-in-out hover:bg-black hover:border-red-600 padding-Notes-b
               max-sm:text-[14px] max-sm:border-0">
                Click here
              </button>
            </div>
          </div>

          <div className="padding flex gap-4 w-[80%] bg-[#010101ee] text-white">
            <div className="w-[100%] max-md:w-[0%]">
              <div className="h-full w-[95%] max-md:hidden">
                <img src="/pyq.png" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-evenly">
              <p className="text-orange-600 font-[700]">#Pyq's</p>
              <h1 className="text-pink-600 font-[800] text-xl max-sm:text-[14px]">BSC IT Pyq's</h1>
              <p className="max-sm:text-xs">
                This box containes proper downloadable pdf previous year
                questions of every subject of BSC IT.
              </p>
              <button className="text-xl bg-green-600 cursor-pointer border-2 rounded-sm transform-all duration-300 ease-in-out hover:bg-black hover:border-green-600 padding-Notes-b 
              max-sm:text-[14px] max-sm:border-0">
                Click here
              </button>
            </div>
          </div>
        </section>

        <section className="w-full padding">
          <div className="w-[80%] mx-auto text-center max-md:w-full">
            <h1 className="text-3xl font-[800] tracking-[0.07em] m-t-2 m-b-3 shadow-lg">
              READ ONCE
            </h1>
          </div>

          <div className="flex w-[80%] mx-auto gap-10 justify-center max-md:flex-col max-md:w-full max-md:items-center">
            <div className=" w-[80%] rounded-xl overflow-hidden shadow-[2px_2px_7px_black]">
              <img
                src="https://notexpert.netlify.app/images/whatstudy.png"
                alt=""
                className="h-full"
              />
            </div>
            <div className="flex flex-col gap-4 justify-start relative">
              <h1 className="text-2xl absolute top-[0rem] -left-7 underline max-sm:text-xl">
                What to Study:{" "}
              </h1>
              <ul className="flex flex-col gap-2 list-disc justify-end text-[13px] m-t-2 font-[550] text-gray-800 max-sm:text-[10px]">
                <li className="">
                  First learn a programming language using the step by step plan
                  to learn a language pdf created by us.
                  <a href="Imp links/stepbystep2.pdf" className="text-blue-800">
                    Download here
                  </a>
                  .
                </li>
                <li>
                  Now start solving easy beginner question from the beginner
                  coding sheet created by us.
                  <a href="Imp links/BEGINNER'S CODING SHEET3.pdf" className="text-blue-800">
                    Download here
                  </a>
                  .
                </li>
                <li>
                  After solving enough questions on programming language start
                  learning basic DSA concepts from.
                  <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQ" className="text-blue-800">
                    here
                  </a>
                  .
                </li>
                <li>
                  Keep solving question from the best dsa sheet{" "}
                  <a href="" className="text-blue-800">
                    Download here
                  </a>{" "}
                  or
                  <a href="https://leetcode.com/problemset/" className="text-blue-800">
                    leetcode
                  </a>
                  , don't stop problem solving because TWO QUESTIONS IN A
                  DAY(REGULAR) {">>>>"} 10 QUESTIONS IN A DAY (BUT NOT REGULAR).
                </li>
                <li>
                  Now it's time to start web development from{" "}
                  <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" className="text-blue-800">
                    here
                  </a>{" "}
                  , also make small projects while learning development,1st
                  learn frontend(Html,css,js,bootstrap and react) then jump to
                  backend(nodeJs and mysql).
                </li>
                <li>
                  Also learn version control system{" "}
                  <a href="https://www.youtube.com/watch?v=uaeKhfhYE0U&ab_channel=AnujKumarSharma" className="text-blue-800">
                    (Git and Github)
                  </a>{" "}
                  and make repositories and push everything that you are
                  learning.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full m-b-4 m-t-2">
          <div className="flex w-[80%] mx-auto gap-10 justify-between max-md:flex-col-reverse max-md:w-full max-md:items-center">
            <div className="flex flex-col gap-4 justify-start relative margin-left">
              <h1 className="text-2xl absolute top-[0rem] -left-7 underline max-sm:text-xl">
                How to Study:{" "}
              </h1>
              <ul className="flex flex-col gap-2 list-disc justify-end text-[13px] m-t-2 font-[550] text-gray-800 max-sm:text-[10px]">
                <li className="">
                  Follow one course for one tech mentioned in the website , do
                  not follow more than one course for one thing
                </li>
                <li>
                  Make your own proper notes.because there is no notes better
                  than your notes created by you.
                </li>
                <li>
                  Solve questions topic wise as mentioned in the
                  <a href="" className="text-blue-800">
                    excel dsa sheet
                  </a>
                  .
                </li>
                <li>
                  Within some short of time revise the previous topic which you
                  have studied to get the strong grip on every topic.
                </li>
                <li>
                  After completing one topic and solving enough questions from
                  sheet , you can solve the interview oriented questions from
                  <a href="https://www.tpointtech.com/java-programs" className="text-blue-800">
                    javatpoint
                  </a>{" "}
                  and{" "}
                  <a href="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions" className="text-blue-800">
                    gfg
                  </a>
                </li>
                <li>
                  Make a proper group of similar interest students to discuss
                  doubts with each other and learn.
                </li>
              </ul>
            </div>

            <div className=" w-[80%] rounded-xl overflow-hidden shadow-[2px_2px_7px_black]">
              <img
                src="https://notexpert.netlify.app/images/howstudy.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
        </section>
      </section>
    );
};
