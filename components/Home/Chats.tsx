import React, { useEffect, useRef, useState } from "react";
import { AudioVisualizer } from "react-audio-visualize";

const Chats: React.FC = () => {
  const [isVoiceNotePlayed, setIsVoiceNotePlayed] = useState<boolean>(false);
  let [voiceNote, setVoiceNote] = useState<HTMLAudioElement>();
  let [blob, setBlob] = useState<Blob>();
  const visualizerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setVoiceNote((voiceNote = new Audio("/music-sound.mp3")));
    let reader = new FileReader();
  }, []);

  const playVoiceNote = () => {
    setIsVoiceNotePlayed(true);
    voiceNote!.play();
  };
  const pauseVoiceNote = () => {
    setIsVoiceNotePlayed(false);
    voiceNote!.pause();
  };
  return (
    <div>
      <div className="flex gap-4 mt-5 ml-5 items-center mb-8">
        <div className="w-[160px] h-[1px] bg-secondary"></div>
        <span className="font-poppins text-xs font-semibold">Today</span>
        <div className="w-[160px] h-[1px] bg-secondary"></div>
      </div>
      <div className="flex justify-end mr-5">
        <div className="bg-chatBg w-[252px] h-[87px] rounded-t-[17px] rounded-l-[17px] p-[16px]">
          <p className="text-[13px] font-poppins font-medium text-titleColor">
            Hi! Next week we'll start a new project. i'll tell you all the
            details later.
          </p>
          <div className="flex justify-end mt-3">
            <p className="font-poppins font-normal text-[10px] text-titleColor">
              9:20AM
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-5 mt-4">
        <div className="bg-[#f5f5fb] w-[252px] h-[68px] rounded-t-[17px] rounded-l-[17px] p-3">
          <div className="flex items-center gap-2">
            <div>
              {!isVoiceNotePlayed && (
                <button
                  type="button"
                  className="outline-none focus:outline-none bg-transparent"
                  onClick={() => playVoiceNote()}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="22.7477"
                      cy="22.195"
                      rx="21.9063"
                      ry="21.8981"
                      fill="#BADAF6"
                    />
                    <path
                      d="M17.1438 28.0075V16.2625C17.1438 15.4985 17.9657 15.0167 18.6323 15.3899L28.4235 20.8709C29.0827 21.2399 29.1103 22.1787 28.4739 22.5858L18.6827 28.8499C18.0171 29.2757 17.1438 28.7977 17.1438 28.0075Z"
                      fill="#132050"
                    />
                  </svg>
                </button>
              )}
              {isVoiceNotePlayed && (
                <button
                  type="button"
                  className="outline-none focus:outline-none"
                  onClick={() => pauseVoiceNote()}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="22.7477"
                      cy="22.195"
                      rx="21.9063"
                      ry="21.8981"
                      fill="#BADAF6"
                    />
                    <path
                      d="M21.095 29.28H18.365C17.6114 29.28 17 28.5467 17 27.6429V15.6371C17 14.7333 17.6114 14 18.365 14H21.095C21.8486 14 22.46 14.7333 22.46 15.6371V27.6429C22.46 28.5467 21.8486 29.28 21.095 29.28ZM29.74 27.6429V15.6371C29.74 14.7333 29.1286 14 28.375 14H25.645C24.8914 14 24.28 14.7333 24.28 15.6371V27.6429C24.28 28.5467 24.8914 29.28 25.645 29.28H28.375C29.1286 29.28 29.74 28.5467 29.74 27.6429Z"
                      fill="#132050"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div>
              <div className="flex gap-[3px] items-center relative">
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[24px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[16px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[20px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[24px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[16px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[20px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[18px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[16px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[16px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[24px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[24px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[17px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[13px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[24px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
                <div className="w-[3px] h-[10px] rounded-sm z-10 bg-[#b2b2bd]"></div>
              </div>
              {blob && (
                <AudioVisualizer
                  ref={visualizerRef}
                  blob={blob}
                  width={500}
                  height={75}
                  barWidth={1}
                  gap={0}
                  barColor={"#f76565"}
                />
              )}
            </div>
            <div>
              <div>
                <span className="text-black font-poppins text-xs font-medium tracking-[0.24px]">
                  {/* {voiceNote?.duration} */}
                  35:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-5 mt-4">
        <div className="bg-chatBg w-[252px] h-[87px] rounded-t-[17px] rounded-l-[17px] p-[16px]">
          <p className="text-[13px] font-poppins font-medium text-titleColor">
            Here is the link to tomorrow's meeting, check it please
          </p>
          <div className="flex justify-end mt-3">
            <p className="font-poppins font-normal text-[10px] text-titleColor">
              9:20AM
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-5 mt-4">
        <div className="bg-chatBg w-[252px] rounded-t-[17px] rounded-l-[17px] p-[13px]">
          <div className="flex gap-4 items-center">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="22.5099"
                cy="22.4953"
                rx="22.06"
                ry="22.4074"
                fill="white"
              />
              <path
                d="M16.4703 18.397V25.5977H23.5593V18.397H16.4703Z"
                fill="white"
              />
              <path
                d="M12.4827 18.8485V25.1491L14.698 25.5991L16.9133 25.1491V18.8485L14.698 18.3984L12.4827 18.8485Z"
                fill="#1E88E5"
              />
              <path
                d="M27.5469 21.9989V28.2995C27.5469 29.0452 26.9519 29.6496 26.2177 29.6496H16.9133L16.4703 27.3994L16.9133 25.1492H23.1163V21.9989L25.3316 21.5488L27.5469 21.9989Z"
                fill="#4CAF50"
              />
              <path
                d="M27.5469 15.6978V21.9984H23.1163V18.8481H16.9133L16.4703 16.5979L16.9133 14.3477H26.2177C26.9519 14.3477 27.5469 14.9521 27.5469 15.6978Z"
                fill="#FBC02D"
              />
              <path
                d="M16.9133 25.1465V29.6469H13.8119C13.0777 29.6469 12.4827 29.0425 12.4827 28.2968V25.1465H16.9133Z"
                fill="#1565C0"
              />
              <path
                d="M16.9133 14.3477V18.8481H12.4827L16.9133 14.3477Z"
                fill="#E53935"
              />
              <path
                d="M27.9899 22.0001L27.5468 25.803L23.1161 22.0001L27.5468 18.1973L27.9899 22.0001Z"
                fill="#2E7D32"
              />
              <path
                d="M31.5345 15.7488V28.251C31.5345 28.629 31.1003 28.8405 30.8123 28.602L27.5469 25.8028V18.197L30.8123 15.3978C31.1003 15.1592 31.5345 15.3708 31.5345 15.7488Z"
                fill="#4CAF50"
              />
            </svg>
            <div>
              <p className="font-poppins font-medium text-[16px]">
                Project onboarding
              </p>
              <p className="font-poppins font-medium text-[12px]">
                meet.google.com/project
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5">
        <div className="relative">
          <div className="absolute mt-4 px-2 flex justify-between w-full">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68738 17.5604C0.295382 15.4016 0.339964 11.9204 2.74412 9.76943L11.3313 2.0866C13.1455 0.463391 16.0944 0.463248 17.9088 2.0866C19.7055 3.69413 19.7077 6.28783 17.9088 7.89725L10.4233 14.5879C9.20113 15.6813 7.20426 15.6661 6.00278 14.5522C4.84526 13.479 4.88239 11.7781 6.06222 10.7225L11.9468 5.46473C12.1998 5.23864 12.6145 5.23477 12.873 5.4561L13.8089 6.25743C14.0674 6.47879 14.0718 6.84152 13.8188 7.0676L7.93484 12.3249C7.73294 12.5055 7.72049 12.8057 7.90831 12.9798C8.08729 13.1458 8.36866 13.1485 8.55055 12.9857L16.036 6.29513C16.8389 5.57677 16.8389 4.4072 16.0355 3.68844C15.25 2.98565 13.9904 2.98529 13.2045 3.68844L4.61736 11.3712C3.19423 12.6445 3.17229 14.7056 4.5686 15.9658C5.9609 17.2223 8.21146 17.2239 9.60634 15.976L16.6501 9.67397C16.903 9.44771 17.3177 9.44363 17.5764 9.66481L18.5129 10.4656C18.7716 10.6868 18.7763 11.0495 18.5234 11.2758L11.4796 17.5778C9.0407 19.7598 5.09564 19.7339 2.68738 17.5604Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div className="flex gap-3 justify-end w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.707 13.69L14.7079 13.6888C14.9203 13.4324 15.0015 13.1289 14.9549 12.8347C14.9102 12.5532 14.755 12.317 14.5603 12.1556C14.3656 11.9942 14.1051 11.8854 13.8208 11.8933C13.5235 11.9016 13.2402 12.037 13.0281 12.2933L13.4133 12.6121L13.0297 12.2914C12.2962 13.1687 11.2237 13.6719 10.078 13.6719C8.93159 13.6719 7.85978 13.1718 7.12697 12.2921L7.12569 12.2905C6.91194 12.036 6.62851 11.9015 6.33164 11.8933C6.04716 11.8854 5.78628 11.9939 5.59127 12.1559C5.39629 12.3179 5.24155 12.5549 5.19823 12.8372C5.153 13.1319 5.23622 13.4349 5.44933 13.6902C6.59803 15.068 8.28419 15.8584 10.078 15.8584C11.872 15.8584 13.5583 15.0679 14.707 13.69ZM5.83318 13.3698C5.33031 12.7673 6.23992 12.0133 6.7428 12.6121L14.3229 13.3698C13.2691 14.6339 11.7235 15.3584 10.078 15.3584C8.43261 15.3584 6.88701 14.6339 5.83318 13.3698ZM1.40796 10.0358C1.40796 5.24828 5.28828 1.36914 10.078 1.36914C14.8678 1.36914 18.7481 5.24828 18.7481 10.0358C18.7481 14.8233 14.8678 18.7025 10.078 18.7025C5.28828 18.7025 1.40796 14.8233 1.40796 10.0358ZM14.7194 8.26161C14.7194 7.33106 13.9666 6.57881 13.0361 6.57881C12.1057 6.57881 11.3529 7.33106 11.3529 8.26161C11.3529 9.19216 12.1057 9.9444 13.0361 9.9444C13.9666 9.9444 14.7194 9.19216 14.7194 8.26161ZM8.80319 8.26161C8.80319 7.33106 8.0504 6.57881 7.11996 6.57881C6.18951 6.57881 5.43672 7.33106 5.43672 8.26161C5.43672 9.19216 6.18951 9.9444 7.11996 9.9444C8.0504 9.9444 8.80319 9.19216 8.80319 8.26161Z"
                  stroke="#ACACAC"
                />
              </svg>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.64586 15.0948L6.6459 15.0948C9.78638 15.3862 12.49 13.032 12.49 10.0358V8.31705C12.49 8.30499 12.4943 8.28999 12.511 8.27411C12.5281 8.25781 12.5556 8.24413 12.5921 8.24413H13.1941C13.2306 8.24413 13.2581 8.25781 13.2753 8.27411C13.2919 8.28999 13.2962 8.30499 13.2962 8.31705V10.0358C13.2962 12.9449 11.0116 15.387 8.01176 15.7787L7.5765 15.8355V16.2745V17.4837V17.9837H8.0765H10.1838C10.2202 17.9837 10.2477 17.9974 10.2649 18.0137C10.2816 18.0296 10.2858 18.0446 10.2858 18.0566V18.6295C10.2858 18.6416 10.2816 18.6566 10.2649 18.6725C10.2477 18.6888 10.2202 18.7025 10.1838 18.7025H4.163C4.12657 18.7025 4.09902 18.6888 4.08189 18.6725C4.0652 18.6566 4.06092 18.6416 4.06092 18.6295V18.0566C4.06092 18.0446 4.0652 18.0296 4.08189 18.0137C4.09902 17.9974 4.12657 17.9837 4.163 17.9837H6.27027H6.77027V17.4837V16.2609V15.8222L6.33532 15.7651C3.27649 15.3637 1.05054 12.7188 1.05054 9.75507V8.31705C1.05054 8.30499 1.05481 8.28999 1.07151 8.27411C1.08864 8.25781 1.11618 8.24413 1.15261 8.24413H1.75469C1.79112 8.24413 1.81867 8.25781 1.8358 8.27411C1.85249 8.28999 1.85677 8.30499 1.85677 8.31705V9.8317C1.85677 12.4731 3.87738 14.8377 6.64586 15.0948ZM10.2858 10.0358C10.2858 11.6351 8.91605 12.9733 7.17338 12.9733C5.43071 12.9733 4.06092 11.6351 4.06092 10.0358V4.30664C4.06092 2.70738 5.43071 1.36914 7.17338 1.36914C8.91605 1.36914 10.2858 2.70738 10.2858 4.30664V10.0358Z"
                  stroke="#ACACAC"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            className="w-full rounded-lg mr-4 pl-10 text-sm h-[50px] font-poppins border-none bg-secondary"
            placeholder="Write a message"
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
