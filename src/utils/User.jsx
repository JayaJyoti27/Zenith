import React from "react";
import Header from "./Header";
import { profile } from "../items.js";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const User = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged Out");
        navigate("/signup");
      })
      .catch((error) => {
        alert("Unsuccessfull");
      });
  };
  return (
    <div>
      <div className="grid grid-cols-9">
        <div className="col-span-2 h-[100vh] border border-1 bg-5">
          <Header />
        </div>
        <div className="col-span-7 h-[100vh] border border-1 bg-3">
          <div className="flex items-center justify-center mt-10">
            <img src={profile} height={200} width={200} />
          </div>
          <div className="m-5">
            <h1 className="text-3xl text-red-700 text-center font-bold">
              Logging Off?
            </h1>
            <h2 className="text-xl text-black text-center m-6">
              Be back soon🎀
            </h2>
          </div>
          <div className="flex items-center justify-center m-20">
            <button
              className="h-200 w-400 p-5 bg-1 font-bold text-3xl text-6 "
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
