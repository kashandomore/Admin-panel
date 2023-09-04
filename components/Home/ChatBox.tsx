import Image from "next/image";
import React from "react";
import Chats from "./Chats";

const ChatBox: React.FC = () => {
  return (
    <>
      <div className="bg-white w-[435px] rounded-[27px] mt-[28px] pt-[16px]">
        <div className="w-[402px] h-[293px] bg-secondary rounded-[27px] mx-auto">
          <div className="flex justify-end p-5 cursor-pointer">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9717 1.66741L1.03086 13.6038M12.9717 13.6038L1.03086 1.66741"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center mb-10">
            <Image
              className="rounded-full"
              width={82}
              height={82}
              objectFit="cover"
              src={"/user-img.jpg"}
              alt=""
            />
            <h1 className="font-poppins font-semibold text-base">
              Syed kashan shah
            </h1>
            <p className="font-poppins font-medium text-[12px] text-titleColor">
              @kashandomore
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07147 3.21143C1.07147 2.82124 1.22653 2.44704 1.50254 2.17114C1.77854 1.89523 2.15288 1.74023 2.54322 1.74023H4.95687C5.11125 1.74035 5.26169 1.789 5.38688 1.8793C5.51208 1.9696 5.6057 2.09697 5.65448 2.24338L6.75682 5.54842C6.81267 5.71638 6.80606 5.89885 6.73821 6.06234C6.67036 6.22583 6.54581 6.35938 6.38741 6.43849L4.72655 7.26971C5.54065 9.07085 6.9838 10.5135 8.78561 11.3273L9.61715 9.66702C9.69629 9.50868 9.82989 9.38418 9.99344 9.31635C10.157 9.24852 10.3395 9.24192 10.5076 9.29775L13.8138 10.3997C13.9604 10.4485 14.0879 10.5422 14.1783 10.6675C14.2686 10.7928 14.3172 10.9433 14.3172 11.0978V13.5098C14.3172 13.9 14.1621 14.2742 13.8861 14.5501C13.6101 14.826 13.2357 14.981 12.8454 14.981H12.1095C6.01358 14.981 1.07147 10.0407 1.07147 3.94702V3.21143Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09343 1.72266H13.827C14.37 1.72266 14.7718 2.14731 14.7718 2.62442V14.0987C14.7718 14.5758 14.37 15.0004 13.827 15.0004H2.09343C1.55044 15.0004 1.14868 14.5758 1.14868 14.0987V2.62442C1.14868 2.14731 1.55044 1.72266 2.09343 1.72266ZM18.0737 10.9606V5.76209L22.0896 3.05324C22.0899 3.05305 22.0902 3.05287 22.0904 3.05269C22.1991 2.98028 22.3244 2.97755 22.4345 3.03279C22.5435 3.08751 22.5834 3.16761 22.5834 3.24906V13.47C22.5834 13.553 22.5431 13.6327 22.4343 13.6871C22.3232 13.7427 22.1979 13.7388 22.0914 13.6671L18.0737 10.9606Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="6"
                height="18"
                viewBox="0 0 6 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.49054"
                  y="0.685547"
                  width="5.09449"
                  height="5.09259"
                  rx="2.54629"
                  fill="black"
                />
                <rect
                  x="0.49057"
                  y="7.81641"
                  width="5.09449"
                  height="5.09259"
                  rx="2.54629"
                  fill="black"
                />
                <rect
                  x="0.49057"
                  y="14.9453"
                  width="5.09449"
                  height="5.09259"
                  rx="2.54629"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <Chats />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
