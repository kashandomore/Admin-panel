import Image from "next/image";
import React from "react";

const Team: React.FC = () => {
  return (
    <>
      <div className="w-[425px] rounded-[27px] bg-white mt-[28px] p-[34px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="font-poppins font-semibold text-2xl">Team</h1>
          </div>
          <div className="bg-secondary w-[64px] h-[42px] rounded-[27px] gap-2 flex justify-center items-center">
            <div className="flex gap-2 items-center">
              <svg
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.51259 3.73558C9.51259 4.45592 9.20588 5.14676 8.65994 5.65611C8.114 6.16547 7.37354 6.45163 6.60145 6.45163C5.82937 6.45163 5.08891 6.16547 4.54297 5.65611C3.99702 5.14676 3.69031 4.45592 3.69031 3.73558C3.69031 3.01524 3.99702 2.3244 4.54297 1.81504C5.08891 1.30569 5.82937 1.01953 6.60145 1.01953C7.37354 1.01953 8.114 1.30569 8.65994 1.81504C9.20588 2.3244 9.51259 3.01524 9.51259 3.73558ZM6.60145 8.48866C5.25031 8.48866 3.9545 8.98943 2.9991 9.88081C2.0437 10.7722 1.50696 11.9811 1.50696 13.2417H11.6959C11.6959 11.9811 11.1592 10.7722 10.2038 9.88081C9.2484 8.98943 7.9526 8.48866 6.60145 8.48866Z"
                  stroke="#2C62B4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-poppins font-semibold text-base text-[#2C62B4]">
                63
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-4">
            <Image
              width={44}
              className="rounded-full"
              height={44}
              objectFit="cover"
              src={"/user-img.jpg"}
              alt=""
            />
            <div>
              <h1 className="font-poppins font-semibold text-[15px]">
                Syed kashan shah
              </h1>
              <p className="font-poppins font-medium text-[11px] mt-1">
                Project manager
              </p>
            </div>
          </div>
          <div className="bg-secondary w-[42px] h-[42px] rounded-full flex justify-center items-center">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90384 4.13222L9.49634 9.10695C9.8126 9.31434 10.1843 9.42501 10.5645 9.42501C10.9447 9.42501 11.3164 9.31434 11.6326 9.10695L19.2251 4.13222M3.82843 14.5357H17.3005C17.811 14.5357 18.3005 14.3364 18.6614 13.9816C19.0224 13.6269 19.2251 13.1458 19.2251 12.6441V3.18645C19.2251 2.68479 19.0224 2.20367 18.6614 1.84894C18.3005 1.49421 17.811 1.29492 17.3005 1.29492H3.82843C3.31799 1.29492 2.82847 1.49421 2.46754 1.84894C2.10661 2.20367 1.90384 2.68479 1.90384 3.18645V12.6441C1.90384 13.1458 2.10661 13.6269 2.46754 13.9816C2.82847 14.3364 3.31799 14.5357 3.82843 14.5357Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-4">
            <Image
              width={44}
              className="rounded-full"
              height={44}
              objectFit="cover"
              src={"/user2.png"}
              alt=""
            />
            <div>
              <h1 className="font-poppins font-semibold text-[15px]">
                Hassan Malik
              </h1>
              <p className="font-poppins font-medium text-[11px] mt-1">
                Project manager
              </p>
            </div>
          </div>
          <div className="bg-secondary w-[42px] h-[42px] rounded-full flex justify-center items-center">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90384 4.13222L9.49634 9.10695C9.8126 9.31434 10.1843 9.42501 10.5645 9.42501C10.9447 9.42501 11.3164 9.31434 11.6326 9.10695L19.2251 4.13222M3.82843 14.5357H17.3005C17.811 14.5357 18.3005 14.3364 18.6614 13.9816C19.0224 13.6269 19.2251 13.1458 19.2251 12.6441V3.18645C19.2251 2.68479 19.0224 2.20367 18.6614 1.84894C18.3005 1.49421 17.811 1.29492 17.3005 1.29492H3.82843C3.31799 1.29492 2.82847 1.49421 2.46754 1.84894C2.10661 2.20367 1.90384 2.68479 1.90384 3.18645V12.6441C1.90384 13.1458 2.10661 13.6269 2.46754 13.9816C2.82847 14.3364 3.31799 14.5357 3.82843 14.5357Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-4">
            <Image
              width={44}
              className="rounded-full"
              height={44}
              objectFit="cover"
              src={"/user3.jpg"}
              alt=""
            />
            <div>
              <h1 className="font-poppins font-semibold text-[15px]">
                Ahmad Hassan
              </h1>
              <p className="font-poppins font-medium text-[11px] mt-1">
                Project manager
              </p>
            </div>
          </div>
          <div className="bg-secondary w-[42px] h-[42px] rounded-full flex justify-center items-center">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90384 4.13222L9.49634 9.10695C9.8126 9.31434 10.1843 9.42501 10.5645 9.42501C10.9447 9.42501 11.3164 9.31434 11.6326 9.10695L19.2251 4.13222M3.82843 14.5357H17.3005C17.811 14.5357 18.3005 14.3364 18.6614 13.9816C19.0224 13.6269 19.2251 13.1458 19.2251 12.6441V3.18645C19.2251 2.68479 19.0224 2.20367 18.6614 1.84894C18.3005 1.49421 17.811 1.29492 17.3005 1.29492H3.82843C3.31799 1.29492 2.82847 1.49421 2.46754 1.84894C2.10661 2.20367 1.90384 2.68479 1.90384 3.18645V12.6441C1.90384 13.1458 2.10661 13.6269 2.46754 13.9816C2.82847 14.3364 3.31799 14.5357 3.82843 14.5357Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-[378px] h-[1px] bg-secondary flex justify-center mb-[30px]"></div>
        <div className="flex gap-4 items-center cursor-pointer">
          <div className="bg-btnColor rounded-full w-[43px] h-[43px] flex justify-center items-center">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91291 0.425781C9.18314 0.425781 9.4423 0.533089 9.63338 0.724098C9.82446 0.915108 9.93181 1.17417 9.93181 1.4443V7.55541H16.0452C16.3154 7.55541 16.5746 7.66271 16.7657 7.85372C16.9568 8.04473 17.0641 8.3038 17.0641 8.57392C17.0641 8.84405 16.9568 9.10312 16.7657 9.29413C16.5746 9.48514 16.3154 9.59244 16.0452 9.59244H9.93181V15.7035C9.93181 15.9737 9.82446 16.2327 9.63338 16.4238C9.4423 16.6148 9.18314 16.7221 8.91291 16.7221C8.64268 16.7221 8.38352 16.6148 8.19244 16.4238C8.00136 16.2327 7.89401 15.9737 7.89401 15.7035V9.59244H1.78062C1.51039 9.59244 1.25123 9.48514 1.06015 9.29413C0.869067 9.10312 0.761719 8.84405 0.761719 8.57392C0.761719 8.3038 0.869067 8.04473 1.06015 7.85372C1.25123 7.66271 1.51039 7.55541 1.78062 7.55541H7.89401V1.4443C7.89401 1.17417 8.00136 0.915108 8.19244 0.724098C8.38352 0.533089 8.64268 0.425781 8.91291 0.425781Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-poppins font-semibold text-base">
              Invite new team member
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
