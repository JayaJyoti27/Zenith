import React, { useEffect } from "react";
import {
  calender,
  chat,
  dashboard,
  logo,
  money,
  profile,
  task,
} from "../items";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    gsap.to(".head", {
      opacity: 1,
      y: "-5",
      duration: 0.3,
    });
    gsap.to(".li", {
      x: "0",
      duration: 0.5,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);
  return (
    <div>
      <div className="text-3  font-serif flex p-3 text-3xl head opacity:0">
        <img src={logo} height={30} width={30} className="m-1" />
        <h1
          className="font-sans text-n-3 text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Zenith
        </h1>
      </div>

      <ul className="mt-[5rem]">
        <li className="flex m-6 ml-5 li transform -translate-x-full">
          <img src={dashboard} height={45} width={45} />
          <h3
            className="text-2xl  font-semibold ml-4  cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </h3>
        </li>
        <li className="flex m-6 ml-5 li   transform -translate-x-full">
          <img src={task} height={45} width={45} />
          <h3
            className="text-2xl  font-semibold ml-4  cursor-pointer"
            onClick={() => navigate("/task")}
          >
            Tasks
          </h3>
        </li>
        <li className="flex m-6 ml-5 li transform -translate-x-full">
          <img src={calender} height={45} width={45} />
          <h3
            className="text-2xl font-semibold ml-4 cursor-pointer"
            onClick={() => navigate("/calender")}
          >
            Calender
          </h3>
        </li>

        <li className="flex m-6 ml-5 li transform -translate-x-full">
          <img src={money} height={45} width={45} />
          <h3
            className="text-2xl  ml-4 font-semibold cursor-pointer"
            onClick={() => navigate("/transaction")}
          >
            Transactions
          </h3>
        </li>

        <li className="flex m-6 ml-5 li transform -translate-x-full">
          <img src={profile} height={45} width={45} />
          <h3
            className="text-2xl font-semibold ml-4  cursor-pointer "
            onClick={() => navigate("/user")}
          >
            User
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Header;
