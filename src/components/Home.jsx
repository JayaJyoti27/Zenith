// Home.js
// Home.js
import React, { useEffect, useRef } from "react";

import Illustration from "./Illustration";
import Header from "./Header";
const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-1 h-[100vh]   bg-5">
          <Header />
        </div>
        <div className="col-span-4 h-[100vh] bg-1">
          <Illustration />
        </div>
      </div>
    </div>
  );
};

export default Home;
