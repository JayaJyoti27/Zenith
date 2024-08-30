import React from "react";
import { track, learn, service, grow } from "../items";
const Illustration = () => {
  return (
    <div>
      <div className="">
        <div className="relative">
          <div className="absolute top-10 left-[10rem] border border-6 hehe">
            <video height={450} width={500} autoPlay muted loop>
              <source src={grow} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-10 right-[12rem] ">
            <h1 className="text-6 text-2xl font-bold">
              Your one stop for all your works{" "}
            </h1>
            <h2 className="text-black text-xl font-bold">Manage Grow Expand</h2>
            <img
              src={track}
              height={300}
              width={350}
              className="left-[15rem]"
            />
          </div>
          <div className="absolute top-[21rem] left-[10rem] border border-6 hehe">
            <img src={service} height={350} width={500} />
          </div>
          <div className="absolute top-[29rem] right-[13rem] border border-6 hehe">
            <img src={learn} height={200} width={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
