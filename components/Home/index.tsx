import React from "react";
import ChatBox from "./ChatBox";
import Meeting from "./Meeting";
import Team from "./Team";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex gap-7">
        <div>
          <ChatBox />
        </div>
        <div>
          <Team />
          <Meeting />
        </div>
      </div>
    </>
  );
};

export default Home;
