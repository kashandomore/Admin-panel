import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] rounded-[27px] w-[313px] pt-[37px] p-[30px]">
        <div className="mb-24">
          <h1 className="text-base font-semibold font-poppins">Logo</h1>
        </div>
        <div className="space-y-8 mb-[218px]">
          {/* home */}
          <div className="flex gap-4 items-center w-full">
            <svg
              width="14"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50178 0.909836L1.73912 6.67035C0.988649 7.42053 0.567017 8.43818 0.567017 9.4993V14.5765C0.567017 15.7919 1.09013 17.0897 2.2817 17.3292C2.78046 17.4294 3.26037 17.4146 3.70454 17.3319C5.01961 17.0871 5.66151 15.6959 5.66151 14.3582V10.879C5.66151 10.3268 6.10923 9.87904 6.66151 9.87904H10.2655C10.8177 9.87904 11.2655 10.3268 11.2655 10.879V13.9185C11.2655 15.2449 11.7254 16.7462 13.0173 17.0469C13.5322 17.1667 14.0102 17.1183 14.4292 16.9791C15.5069 16.6211 15.8505 15.3714 15.8505 14.2357V9.4993C15.8505 8.43818 15.4289 7.42053 14.6784 6.67034L8.91573 0.909835C8.52524 0.519487 7.89228 0.519488 7.50178 0.909836Z"
                stroke="black"
              />
            </svg>

            <a
              className="block font-poppins font-semibold text-black text-xs"
              href="/"
            >
              Home
            </a>
          </div>
          {/* Projects */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.566895 1.87909C0.566895 1.44496 0.739418 1.0286 1.04651 0.721626C1.35361 0.414647 1.77011 0.242188 2.20441 0.242188H5.47944C5.91374 0.242188 6.33025 0.414647 6.63734 0.721626C6.94444 1.0286 7.11696 1.44496 7.11696 1.87909V5.1529C7.11696 5.58703 6.94444 6.00339 6.63734 6.31036C6.33025 6.61734 5.91374 6.7898 5.47944 6.7898H2.20441C1.77011 6.7898 1.35361 6.61734 1.04651 6.31036C0.739418 6.00339 0.566895 5.58703 0.566895 5.1529V1.87909ZM2.20441 1.33346C2.05965 1.33346 1.92081 1.39094 1.81844 1.49327C1.71608 1.5956 1.65857 1.73438 1.65857 1.87909V5.1529C1.65857 5.29761 1.71608 5.43639 1.81844 5.53872C1.92081 5.64105 2.05965 5.69853 2.20441 5.69853H5.47944C5.62421 5.69853 5.76304 5.64105 5.86541 5.53872C5.96777 5.43639 6.02528 5.29761 6.02528 5.1529V1.87909C6.02528 1.73438 5.96777 1.5956 5.86541 1.49327C5.76304 1.39094 5.62421 1.33346 5.47944 1.33346H2.20441ZM9.30031 1.87909C9.30031 1.44496 9.47284 1.0286 9.77993 0.721626C10.087 0.414647 10.5035 0.242188 10.9378 0.242188H14.2129C14.6472 0.242188 15.0637 0.414647 15.3708 0.721626C15.6779 1.0286 15.8504 1.44496 15.8504 1.87909V5.1529C15.8504 5.58703 15.6779 6.00339 15.3708 6.31036C15.0637 6.61734 14.6472 6.7898 14.2129 6.7898H10.9378C10.5035 6.7898 10.087 6.61734 9.77993 6.31036C9.47284 6.00339 9.30031 5.58703 9.30031 5.1529V1.87909ZM10.9378 1.33346C10.7931 1.33346 10.6542 1.39094 10.5519 1.49327C10.4495 1.5956 10.392 1.73438 10.392 1.87909V5.1529C10.392 5.29761 10.4495 5.43639 10.5519 5.53872C10.6542 5.64105 10.7931 5.69853 10.9378 5.69853H14.2129C14.3576 5.69853 14.4965 5.64105 14.5988 5.53872C14.7012 5.43639 14.7587 5.29761 14.7587 5.1529V1.87909C14.7587 1.73438 14.7012 1.5956 14.5988 1.49327C14.4965 1.39094 14.3576 1.33346 14.2129 1.33346H10.9378ZM0.566895 10.6092C0.566895 10.1751 0.739418 9.75876 1.04651 9.45178C1.35361 9.1448 1.77011 8.97234 2.20441 8.97234H5.47944C5.91374 8.97234 6.33025 9.1448 6.63734 9.45178C6.94444 9.75876 7.11696 10.1751 7.11696 10.6092V13.883C7.11696 14.3172 6.94444 14.7335 6.63734 15.0405C6.33025 15.3475 5.91374 15.52 5.47944 15.52H2.20441C1.77011 15.52 1.35361 15.3475 1.04651 15.0405C0.739418 14.7335 0.566895 14.3172 0.566895 13.883V10.6092ZM2.20441 10.0636C2.05965 10.0636 1.92081 10.1211 1.81844 10.2234C1.71608 10.3257 1.65857 10.4645 1.65857 10.6092V13.883C1.65857 14.0278 1.71608 14.1665 1.81844 14.2689C1.92081 14.3712 2.05965 14.4287 2.20441 14.4287H5.47944C5.62421 14.4287 5.76304 14.3712 5.86541 14.2689C5.96777 14.1665 6.02528 14.0278 6.02528 13.883V10.6092C6.02528 10.4645 5.96777 10.3257 5.86541 10.2234C5.76304 10.1211 5.62421 10.0636 5.47944 10.0636H2.20441ZM9.30031 10.6092C9.30031 10.1751 9.47284 9.75876 9.77993 9.45178C10.087 9.1448 10.5035 8.97234 10.9378 8.97234H14.2129C14.6472 8.97234 15.0637 9.1448 15.3708 9.45178C15.6779 9.75876 15.8504 10.1751 15.8504 10.6092V13.883C15.8504 14.3172 15.6779 14.7335 15.3708 15.0405C15.0637 15.3475 14.6472 15.52 14.2129 15.52H10.9378C10.5035 15.52 10.087 15.3475 9.77993 15.0405C9.47284 14.7335 9.30031 14.3172 9.30031 13.883V10.6092ZM10.9378 10.0636C10.7931 10.0636 10.6542 10.1211 10.5519 10.2234C10.4495 10.3257 10.392 10.4645 10.392 10.6092V13.883C10.392 14.0278 10.4495 14.1665 10.5519 14.2689C10.6542 14.3712 10.7931 14.4287 10.9378 14.4287H14.2129C14.3576 14.4287 14.4965 14.3712 14.5988 14.2689C14.7012 14.1665 14.7587 14.0278 14.7587 13.883V10.6092C14.7587 10.4645 14.7012 10.3257 14.5988 10.2234C14.4965 10.1211 14.3576 10.0636 14.2129 10.0636H10.9378Z"
                  fill="#877E76"
                />
              </svg>
              <a
                className="block font-poppins font-semibold text-primary text-xs"
                href="/"
              >
                Project
              </a>
            </div>
            <div className="bg-sideBarIconBg h-[20px] w-[20px] rounded-full flex justify-center items-center">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.06485 0.296875C5.19997 0.296875 5.32955 0.350529 5.42509 0.446034C5.52063 0.541538 5.5743 0.67107 5.5743 0.806134V3.86169H8.631C8.76611 3.86169 8.8957 3.91534 8.99124 4.01085C9.08678 4.10635 9.14045 4.23588 9.14045 4.37095C9.14045 4.50601 9.08678 4.63554 8.99124 4.73105C8.8957 4.82655 8.76611 4.88021 8.631 4.88021H5.5743V7.93576C5.5743 8.07082 5.52063 8.20036 5.42509 8.29586C5.32955 8.39136 5.19997 8.44502 5.06485 8.44502C4.92974 8.44502 4.80016 8.39136 4.70462 8.29586C4.60908 8.20036 4.5554 8.07082 4.5554 7.93576V4.88021H1.49871C1.36359 4.88021 1.23401 4.82655 1.13847 4.73105C1.04293 4.63554 0.989258 4.50601 0.989258 4.37095C0.989258 4.23588 1.04293 4.10635 1.13847 4.01085C1.23401 3.91534 1.36359 3.86169 1.49871 3.86169H4.5554V0.806134C4.5554 0.67107 4.60908 0.541538 4.70462 0.446034C4.80016 0.350529 4.92974 0.296875 5.06485 0.296875Z"
                  fill="#3E3E3E"
                />
              </svg>
            </div>
          </div>
          {/* Tasks */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <svg
                fill="#877E76"
                height="19px"
                width="19px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 470.767 470.767"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M362.965,21.384H289.62L286.638,7.99C285.614,3.323,281.467,0,276.685,0h-82.618c-4.782,0-8.913,3.323-9.953,7.99
		l-2.967,13.394h-73.36c-26.835,0-48.654,21.827-48.654,48.662v352.06c0,26.835,21.819,48.662,48.654,48.662h255.179
		c26.835,0,48.67-21.827,48.67-48.662V70.046C411.635,43.211,389.8,21.384,362.965,21.384z M379.831,422.105
		c0,9.295-7.563,16.858-16.866,16.858H107.786c-9.287,0-16.85-7.563-16.85-16.858V70.046c0-9.295,7.563-16.857,16.85-16.857h66.294
		l-1.692,7.609c-0.684,3.02,0.062,6.188,1.988,8.596c1.94,2.415,4.876,3.82,7.965,3.82h106.082c3.091,0,6.026-1.405,7.951-3.82
		c1.942-2.415,2.687-5.575,2.004-8.596l-1.692-7.609h66.279c9.303,0,16.866,7.563,16.866,16.857V422.105z"
                  />
                  <path
                    d="M170.835,188.426h43.249l-10.279-7.019c-14.506-9.899-18.232-29.693-8.325-44.197c9.893-14.489,29.693-18.239,44.197-8.324
		l1.694,1.157v-12.136c0-7.866-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271
		C156.595,182.045,162.978,188.426,170.835,188.426z"
                  />
                  <path
                    d="M303.256,110.313l-49.85,47.194l-22.704-15.49c-7.221-4.962-17.13-3.083-22.099,4.162
		c-4.954,7.251-3.09,17.144,4.178,22.098l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.474,10.933-4.356
		l59.167-56.014c6.382-6.033,6.645-16.104,0.62-22.479C319.686,104.552,309.637,104.28,303.256,110.313z"
                  />
                  <path
                    d="M170.835,297.669H214.1l-10.295-7.027c-14.506-9.901-18.232-29.693-8.325-44.197c9.893-14.498,29.693-18.248,44.197-8.325
		l1.694,1.158v-12.136c0-7.865-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.279
		C156.595,291.286,162.978,297.669,170.835,297.669z"
                  />
                  <path
                    d="M303.256,219.555l-49.85,47.186l-22.704-15.49c-7.221-4.97-17.13-3.098-22.099,4.162
		c-4.954,7.253-3.09,17.144,4.178,22.099l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.476,10.933-4.356
		l59.167-56.007c6.382-6.033,6.645-16.096,0.62-22.479C319.686,213.793,309.637,213.529,303.256,219.555z"
                  />
                  <path
                    d="M227.129,322.135h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271c0,7.865,6.383,14.248,14.24,14.248h56.294
		c7.859,0,14.242-6.383,14.242-14.248v-56.271C241.371,328.518,234.988,322.135,227.129,322.135z"
                  />
                </g>
              </svg>
              <a
                className="block font-poppins font-semibold text-primary text-xs"
                href="/"
              >
                Tasks
              </a>
            </div>
            <div className="bg-sideBarIconBg h-[20px] w-[20px] rounded-full flex justify-center items-center">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.06485 0.296875C5.19997 0.296875 5.32955 0.350529 5.42509 0.446034C5.52063 0.541538 5.5743 0.67107 5.5743 0.806134V3.86169H8.631C8.76611 3.86169 8.8957 3.91534 8.99124 4.01085C9.08678 4.10635 9.14045 4.23588 9.14045 4.37095C9.14045 4.50601 9.08678 4.63554 8.99124 4.73105C8.8957 4.82655 8.76611 4.88021 8.631 4.88021H5.5743V7.93576C5.5743 8.07082 5.52063 8.20036 5.42509 8.29586C5.32955 8.39136 5.19997 8.44502 5.06485 8.44502C4.92974 8.44502 4.80016 8.39136 4.70462 8.29586C4.60908 8.20036 4.5554 8.07082 4.5554 7.93576V4.88021H1.49871C1.36359 4.88021 1.23401 4.82655 1.13847 4.73105C1.04293 4.63554 0.989258 4.50601 0.989258 4.37095C0.989258 4.23588 1.04293 4.10635 1.13847 4.01085C1.23401 3.91534 1.36359 3.86169 1.49871 3.86169H4.5554V0.806134C4.5554 0.67107 4.60908 0.541538 4.70462 0.446034C4.80016 0.350529 4.92974 0.296875 5.06485 0.296875Z"
                  fill="#3E3E3E"
                />
              </svg>
            </div>
          </div>
          {/* Team */}
          <div className="flex gap-4 items-center">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6.37366"
                y="0.972656"
                width="6.65119"
                height="6.64814"
                rx="3.32407"
                stroke="#877E76"
                stroke-width="1.5"
              />
              <rect
                x="11.4683"
                y="11.1582"
                width="6.65119"
                height="6.64814"
                rx="3.32407"
                stroke="#877E76"
                stroke-width="1.5"
              />
              <rect
                x="1.27917"
                y="11.1582"
                width="6.65119"
                height="6.64814"
                rx="3.32407"
                stroke="#877E76"
                stroke-width="1.5"
              />
            </svg>

            <a
              className="block font-poppins font-semibold text-primary text-xs"
              href="/"
            >
              Team
            </a>
          </div>
          {/* Setting */}
          <div className="flex gap-4 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.567017"
                y="0.222656"
                width="17.3213"
                height="17.3148"
                fill="url(#pattern0)"
                fill-opacity="0.5"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_15_97"
                    transform="scale(0.0104128 0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_15_97"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <a
              className="block font-poppins font-semibold text-primary text-xs"
              href="/"
            >
              Setting
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="bg-gradient-to-b from-[#FEFEFE] to-[#FEFEFE00] w-[256px] h-[208px] rounded-[27px] flex items-center flex-col p-6 mb-6">
            <h1 className="text-base font-poppins font-bold mt-6">
              Upgrade to Pro 🔥
            </h1>
            <p className="font-poppins font-semibold text-[#745991C2] text-center mt-2">
              Get 1 month free and unlock all Pro features
            </p>
            <div>
              <button className="w-[206px] h-[44px] rounded-[27px] bg-btnColor font-poppins font-semibold mt-4">
                Upgrade
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#877E76"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>

              <a
                href="#"
                className="block font-poppins font-semibold text-primary text-xs"
              >
                Help & information
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#877E76"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <a
                href="#"
                className="block font-poppins font-semibold text-primary text-xs"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
