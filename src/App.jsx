// App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import UserSignUp from "./components/UserSignUp";
import { auth } from "./firebase"; // Ensure this path is correct
import Task from "./utils/task/Task";
import Create from "./utils/task/Create";
import Calender from "./utils/Calender";
import Transaction from "./utils/Transaction";
import UserSignIn from "./components/UserSignIn";
import User from "./utils/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUp auth={auth} />} />
        <Route path="/signin" element={<UserSignIn auth={auth} />} />
        <Route path="/task" element={<Task />} />
        <Route path="/create" element={<Create />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
