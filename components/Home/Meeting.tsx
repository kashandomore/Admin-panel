import React from "react";

const Meeting: React.FC = () => {
  return (
    <>
      <div className="bg-white w-[425px] rounded-[27px] mt-[28px] p-[32px]">
        <div className="mb-[27px]">
          <p className="uppercase font-poppins font-light text-xs">meeting</p>
        </div>
        <div className="mb-1">
          <h1 className="font-poppins font-semibold text-2xl">
            Project onboarding
          </h1>
        </div>
        <div className="mb-4">
          <p className="font-poppins font-medium text-base text-titleColor">
            Add description of your meeting
          </p>
        </div>
        <div className="bg-[#F6F6F6] w-[378px] h-[50px] rounded-lg mb-4 flex justify-between items-center p-4">
          <div className="flex gap-2 items-center">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.91292 4.21354C9.91292 4.06159 9.85254 3.91587 9.74506 3.80843C9.63757 3.70099 9.4918 3.64062 9.33979 3.64062C9.18779 3.64062 9.04201 3.70099 8.93453 3.80843C8.82705 3.91587 8.76666 4.06159 8.76666 4.21354V10.5156C8.7667 10.6166 8.79343 10.7158 8.84416 10.8031C8.89488 10.8904 8.9678 10.9628 9.05552 11.0129L13.0674 13.3046C13.1991 13.3757 13.3534 13.3925 13.4973 13.3515C13.6412 13.3104 13.7633 13.2147 13.8375 13.0848C13.9118 12.9549 13.9323 12.8011 13.8946 12.6564C13.8569 12.5116 13.7641 12.3873 13.636 12.31L9.91292 10.1833V4.21354Z"
                fill="black"
              />
              <path
                d="M9.91289 18.5364C12.3449 18.5364 14.6774 17.5707 16.3971 15.8516C18.1168 14.1325 19.083 11.8009 19.083 9.36978C19.083 6.93863 18.1168 4.60706 16.3971 2.88798C14.6774 1.1689 12.3449 0.203125 9.91289 0.203125C7.48083 0.203125 5.14838 1.1689 3.42866 2.88798C1.70893 4.60706 0.742798 6.93863 0.742798 9.36978C0.742798 11.8009 1.70893 14.1325 3.42866 15.8516C5.14838 17.5707 7.48083 18.5364 9.91289 18.5364ZM17.9367 9.36978C17.9367 11.497 17.0914 13.5372 15.5866 15.0414C14.0818 16.5456 12.0409 17.3906 9.91289 17.3906C7.78484 17.3906 5.74394 16.5456 4.23918 15.0414C2.73442 13.5372 1.88906 11.497 1.88906 9.36978C1.88906 7.24253 2.73442 5.2024 4.23918 3.6982C5.74394 2.19401 7.78484 1.34896 9.91289 1.34896C12.0409 1.34896 14.0818 2.19401 15.5866 3.6982C17.0914 5.2024 17.9367 7.24253 17.9367 9.36978Z"
                fill="black"
              />
            </svg>
            <span className="font-poppins font-medium text-xs">
              11:00 - 12:30
            </span>
          </div>
          <div>
            <svg
              width="6"
              height="16"
              viewBox="0 0 6 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0929108"
                y="0.183594"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
              <rect
                x="0.0928955"
                y="7.31445"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
              <rect
                x="0.0928955"
                y="14.4434"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#F6F6F6] w-[378px] h-[50px] rounded-lg flex justify-between items-center p-4 mb-[20px]">
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.83729 5.46274V1.38867M14.9885 5.46274V1.38867M5.81839 9.53681H16.0074M3.7806 19.722H18.0452C18.5856 19.722 19.104 19.5074 19.4861 19.1254C19.8683 18.7433 20.083 18.2252 20.083 17.685V5.46274C20.083 4.92249 19.8683 4.40436 19.4861 4.02234C19.104 3.64032 18.5856 3.42571 18.0452 3.42571H3.7806C3.24014 3.42571 2.72182 3.64032 2.33965 4.02234C1.95749 4.40436 1.7428 4.92249 1.7428 5.46274V17.685C1.7428 18.2252 1.95749 18.7433 2.33965 19.1254C2.72182 19.5074 3.24014 19.722 3.7806 19.722Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-poppins font-medium text-xs">
              Monday, 20 Februray
            </span>
          </div>
          <div>
            <svg
              width="6"
              height="16"
              viewBox="0 0 6 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0928955"
                y="0.369141"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
              <rect
                x="0.0928802"
                y="7.5"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
              <rect
                x="0.0928802"
                y="14.6289"
                width="5.09449"
                height="5.09259"
                rx="2.54629"
                fill="#919191"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className="font-poppins font-semibold text-[15px]">Attendees</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex h-7 w-7 rounded-full bg-btnColor ring-2 ring-white items-center justify-center">
                <p className="font-poppins font-medium text-[10px]">+2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-poppins font-semibold text-[14px]">
                Send invitation link
              </p>
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.88501"
                  y="0.0351562"
                  width="31.5859"
                  height="31.5741"
                  rx="15.787"
                  fill="#B9D8F4"
                />
                <path
                  d="M23.8061 9.54C23.8063 9.53034 23.8063 9.52104 23.8061 9.51138C23.8054 9.48784 23.8031 9.46466 23.7994 9.44148C23.7982 9.43428 23.7978 9.42725 23.7962 9.42005C23.7903 9.39107 23.7818 9.36262 23.771 9.33505C23.7678 9.32697 23.7638 9.31942 23.7602 9.31151C23.7509 9.29062 23.7404 9.27042 23.7283 9.25075C23.7234 9.24267 23.7184 9.23459 23.713 9.22651C23.6951 9.2007 23.6758 9.17593 23.6531 9.15328C23.6303 9.13045 23.6052 9.11095 23.5792 9.09286C23.5718 9.08777 23.5642 9.08303 23.5565 9.07846C23.5358 9.06564 23.5145 9.05458 23.4926 9.04492C23.4857 9.04193 23.4792 9.03842 23.4722 9.03561C23.4439 9.02454 23.4148 9.01576 23.3849 9.00979C23.3795 9.00874 23.3739 9.00839 23.3684 9.00733C23.3435 9.00312 23.3184 9.00066 23.2931 9.00013C23.2847 8.99996 23.2764 8.99996 23.2681 9.00013C23.2434 9.00066 23.2186 9.00312 23.1939 9.00733C23.1877 9.00839 23.1817 9.00874 23.1756 9.00997C23.1485 9.01541 23.1218 9.02279 23.0955 9.03262L8.34178 14.5688C8.14437 14.643 8.0102 14.8275 8.00054 15.0383C7.99105 15.2489 8.10802 15.445 8.29787 15.5367L14.349 18.457L17.2691 24.5082C17.3575 24.691 17.5424 24.8062 17.7439 24.8062C17.7519 24.8062 17.7598 24.806 17.7679 24.8057C17.9785 24.796 18.1633 24.6618 18.2374 24.4644L23.7738 9.71089C23.7836 9.68472 23.7908 9.6582 23.7962 9.63133C23.7977 9.62413 23.7982 9.6171 23.7992 9.6099C23.8031 9.58672 23.8054 9.56336 23.8061 9.54ZM21.187 10.8742L14.636 17.4252L9.86497 15.1229L21.187 10.8742ZM17.6833 22.9412L15.381 18.1704L21.9322 11.6192L17.6833 22.9412Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meeting;
