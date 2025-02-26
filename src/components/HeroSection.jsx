"use client";
import { TypeAnimation } from "react-type-animation";
import HeaderSummary from "./HeaderSummary";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { links } from "@/config/linksConfig";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="min-h-[95vh] flex flex-col justify-evenly">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4 h-[100%]">
        <motion.div
          className="col-span-4 place-self-center mt-4 lg:mt-0 lg:order-1"
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="rounded-full bg-transparent relative w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] absolute transform -translate-x-1/2 translate-y-1/3 left-1/2 rounded-full blur-[20px]"></div>

            <Image
              loading="eager"
              height={550}
              width={540}
              src="/assets/bhushan_nerkar.webp"
              alt="bhushan_nerkar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full rounded-full"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="col-span-8 place-self-center place-items-start gap-4"
        >
          <h1 className="mb-2 mx-10 lg:mb-4 font-extrabold">
            <span className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
              Hi there <span className="text-white">👋</span> I&apos;m{" "}
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              <TypeAnimation
                sequence={[
                  "Bhushan Nerkar",
                  1000,
                  "MERN Developer",
                  1000,
                  "Fullstack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-sm lg:text-xl mb-6 sm:px-10 sm:py-4 md:px-10 md:py-4 lg:px-6 lg:py-4">
            From frontend finesse to backend brilliance — crafting powerful
            digital experiences that solve real-world challenges..!!
          </p>

          <div className="flex px-10">
            <a
              href={links.resume}
              target="_blank"
              aria-label="resume"
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4"
            >
              <span className="flex align-middle gap-2 ">
                Resume <CloudArrowDownIcon className="size-5" />
              </span>
            </a>
            <div className="flex gap-2">
              <a
                href={links.linkedin}
                target="_blank"
                aria-label="linkedin"
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 rounded-full"
              >
                <span className="block bg-[#0565ff] hover:bg-[#1250b5] rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="transparent"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                href={links.github}
                target="_blank"
                aria-label="github"
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 rounded-full"
              >
                <span className="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="mailto:nerkarbhushan.b@gmail.com"
                target="_blank"
                aria-label="gmail"
                className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 px-1 py-1 rounded-full"
              >
                <span className="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#EA4335"
                      d="M32 38.917l-24.8-18.4V48.8c0 1.68 1.52 3.2 3.2 3.2h43.2c1.68 0 3.2-1.52 3.2-3.2V20.517L32 38.917z"
                    />
                    <path
                      fill="#34A853"
                      d="M56.8 15.2H7.2c-.944 0-1.6.656-1.6 1.6V20l26.4 19.6c.8.64 2.08.64 2.88 0L58.4 20v-3.2c0-.944-.656-1.6-1.6-1.6z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M7.2 15.2C5.52 15.2 4 16.72 4 18.4l26.4 19.6c.8.64 2.08.64 2.88 0L60 18.4c0-1.68-1.52-3.2-3.2-3.2H7.2z"
                    />
                    <path
                      fill="#4285F4"
                      d="M56.8 15.2H32v23.717c.736 0 1.472-.192 2.08-.64L60 18.4c0-1.68-1.52-3.2-3.2-3.2z"
                    />
                  </svg>
                </span>
              </a>
              <a
                href={links.leetcode}
                target="_blank"
                aria-label="leetcode"
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 rounded-full"
              >
                <span className="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="-5 -5 60 60"
                  >
                    <path
                      d="M0 0 C0.75 2.1875 0.75 2.1875 1 5 C-0.9375 7.8125 -0.9375 7.8125 -3 10 C-2.443125 10.226875 -1.88625 10.45375 -1.3125 10.6875 C1.72662564 12.41240914 3.75753345 14.32149829 6 17 C6.3125 19.8125 6.3125 19.8125 6 22 C4.27734375 22.72265625 4.27734375 22.72265625 2 23 C-0.44358254 21.31703171 -2.5016468 19.37848495 -4.68359375 17.37109375 C-6.93759323 15.67879655 -6.93759323 15.67879655 -9.55078125 16.578125 C-11.95931108 17.97637836 -13.7821883 19.34904187 -15.75 21.3125 C-16.34296875 21.88613281 -16.9359375 22.45976562 -17.546875 23.05078125 C-19.34159757 25.45821825 -19.88857128 26.99606751 -20 30 C-18.71874277 32.22306481 -18.71874277 32.22306481 -16.75 34.125 C-16.12609375 34.78757813 -15.5021875 35.45015625 -14.859375 36.1328125 C-14.24578125 36.74898437 -13.6321875 37.36515625 -13 38 C-12.21302734 38.86238281 -12.21302734 38.86238281 -11.41015625 39.7421875 C-10.02731131 41.25655105 -10.02731131 41.25655105 -7.6875 41 C-4.73699582 40.0830191 -4.73699582 40.0830191 -2 37.375 C1 35 1 35 3.875 35.1875 C4.57625 35.455625 5.2775 35.72375 6 36 C5.34170069 41.22130545 3.36875461 43.34229276 -0.62109375 46.58984375 C-4.01778116 48.60331527 -6.63839843 48.97732895 -10.546875 48.68359375 C-15.11897665 47.40952084 -17.86880437 44.42621192 -21 41 C-21.59167969 40.41347656 -22.18335938 39.82695313 -22.79296875 39.22265625 C-26.45552055 35.38611149 -28.09821825 32.50022194 -28 27 C-25.84172795 19.53637198 -20.53907661 14.9111148 -15.125 9.5625 C-14.22652344 8.64017578 -13.32804687 7.71785156 -12.40234375 6.76757812 C-11.52964844 5.89681641 -10.65695313 5.02605469 -9.7578125 4.12890625 C-8.9652002 3.33556885 -8.17258789 2.54223145 -7.35595703 1.72485352 C-4.63474183 -0.2674144 -3.29522283 -0.38606191 0 0 Z "
                      fill="#191407"
                      transform="translate(31,0)"
                    />
                    <path
                      d="M0 0 C8.25 0 16.5 0 25 0 C25 1.65 25 3.3 25 5 C22.52401267 7.47598733 15.89139842 6.1855126 12.5625 6.1875 C10.94891602 6.20586914 10.94891602 6.20586914 9.30273438 6.22460938 C8.27599609 6.22654297 7.24925781 6.22847656 6.19140625 6.23046875 C4.77130249 6.23663208 4.77130249 6.23663208 3.32250977 6.24291992 C1 6 1 6 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z "
                      fill="#B3B1B0"
                      transform="translate(19,26)"
                    />
                    <path
                      d="M0 0 C0.70125 0.268125 1.4025 0.53625 2.125 0.8125 C1.4664713 6.03562488 -0.52184096 8.13548254 -4.47265625 11.421875 C-8.4410843 13.71904636 -12.44063186 13.74388216 -16.875 12.8125 C-17.535 12.1525 -18.195 11.4925 -18.875 10.8125 C-17.885 10.4825 -16.895 10.1525 -15.875 9.8125 C-15.58625 9.1525 -15.2975 8.4925 -15 7.8125 C-14.62875 7.1525 -14.2575 6.4925 -13.875 5.8125 C-13.1325 5.668125 -12.39 5.52375 -11.625 5.375 C-8.57616577 4.98742363 -8.57616577 4.98742363 -5.875 2.1875 C-2.875 -0.1875 -2.875 -0.1875 0 0 Z "
                      fill="#E5A21D"
                      transform="translate(34.875,35.1875)"
                    />
                    <path
                      d="M0 0 C4.7534032 1.39805977 8.11007589 4.02027286 11 8 C11.375 10.875 11.375 10.875 11 13 C9.28125 13.7109375 9.28125 13.7109375 7 14 C4.78125 12.6015625 4.78125 12.6015625 2.5 10.625 C-0.60062154 7.95973971 -1.90717722 7.0232057 -6 6 C-4.02 4.02 -2.04 2.04 0 0 Z "
                      fill="#E2A01E"
                      transform="translate(26,9)"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="tel:+918806644745"
                target="_blank"
                aria-label="phone"
                className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 px-1 py-1 rounded-full"
              >
                <span className="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#34A853"
                      d="M49.333 39.467c-2.134-2.133-4.267-3.2-6.4-3.2-1.6 0-2.667.533-3.733 1.6l-3.733 3.2c-3.733-2.134-7.467-5.867-9.6-9.6l3.733-3.2c1.067-1.067 1.6-2.133 1.6-3.733 0-2.133-1.067-4.267-3.2-6.4l-2.134-2.134c-2.133-2.133-4.267-3.2-6.4-3.2-1.6 0-2.667.533-3.733 1.6l-4.267 4.267c-1.6 1.6-2.133 3.733-2.133 6.4 0 7.467 3.733 15.467 9.6 21.333s13.867 9.6 21.333 9.6c2.667 0 4.8-.533 6.4-2.133l4.267-4.267c1.067-1.067 1.6-2.133 1.6-3.733 0-2.133-1.067-4.267-3.2-6.4l-2.133-2.134z"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="https://fb.com/nerkarbhushan.0"
                target="_blank"
                aria-label="facebook"
                class="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-1 py-1 rounded-full"
              >
                <span class="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#1877F2"
                      d="M32 0C14.326 0 0 14.326 0 32c0 15.982 11.672 29.368 27.204 31.04v-21.84h-8.19v-8.2h8.19v-6.2c0-8.1 4.821-12.6 12.3-12.6 3.575 0 7.525.679 7.525.679v8.3h-4.24c-4.16 0-5.67 2.6-5.67 5.2v6.8h9.51l-1.5 8.2h-8.01v21.8c15.527-1.64 27.204-14.038 27.204-31.04 0-17.674-14.326-32-32-32z"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="https://instagram.com/nerkarbhushan.4572"
                target="_blank"
                aria-label="instagram"
                class="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 px-1 py-1 rounded-full"
              >
                <span class="block bg-white hover:bg-slate-400 rounded-full h-35 w-35">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#E1306C"
                      d="M32 0c-17.674 0-32 14.326-32 32s14.326 32 32 32 32-14.326 32-32-14.326-32-32-32zm0 60c-15.464 0-28-12.536-28-28s12.536-28 28-28 28 12.536 28 28-12.536 28-28 28zm0-42.4c7.1 0 12.8 5.7 12.8 12.8s-5.7 12.8-12.8 12.8-12.8-5.7-12.8-12.8 5.7-12.8 12.8-12.8zm0 21.8c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <HeaderSummary />
    </section>
  );
};

export default HeroSection;
