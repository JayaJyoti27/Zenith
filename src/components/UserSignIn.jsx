import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
const UserSignIn = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User signed in successfully");
      navigate("/"); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
    }
  };
  return (
    <div className="bg-2 h-[100vh] w-100% flex-center">
      <div className="flex flex-col h-[70vh] w-[50vw] bg-5 justify-center items-center">
        <h1 className="text-6 text-4xl font-bold">Sign In</h1>
        <h2>Welcome back , we missed you🎀</h2>
        <form onSubmit={handleSignIn}>
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
            className="p-4 m-5 text-center  text-6 flex align-center w-[8vw] bg-1 rounded-xl items-center font-bold"
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignIn;
