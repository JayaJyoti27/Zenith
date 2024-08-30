import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
const UserSignUp = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", email);
      alert("user signed up");
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <div>
      <div className="bg-2 h-[100vh] w-100% flex-center ">
        <div>
          <div className="bg-5 h-[80vh] w-[60vw]  p-8 flex justify-between   border border-n-1/10 rounded-2xl ">
            <div className="flex flex-col ">
              <h1 className="text-6xl font-bold mt-[7rem] text-1">Hey,</h1>
              <h2 className="text-2xl">Welcome onboard!🎀</h2>
            </div>
            <div className="mt-[2rem]">
              <h4 className="text-center text-2xl text-6">
                Please fill in your credentials
              </h4>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col m-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="m-3 p-2 border text-1 border-1  rounded-xl w-[30vw]"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="m-3 p-2 text-1 border border-1 rounded-xl "
                  />
                </div>
                <button
                  type="submit"
                  className="p-4 m-5 text-center  text-6 font-bold flex align-center w-[8vw] bg-1 rounded-xl"
                >
                  SignUp
                </button>
              </form>
              <h4 className="text-2xl text-center text-6">
                Already have an account?
              </h4>
              <button
                onClick={() => navigate("/signin")}
                className="p-4 m-5 text-center flex align-center w-[8vw] bg-1 text-6 font-bold rounded-xl"
              >
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
