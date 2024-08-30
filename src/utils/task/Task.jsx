import React, { useState } from "react";
import Header from "../Header";
import { CgAddR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);

  const toggleTask = (taskId) => {
    setSelectedTask((prevSelectedTask) =>
      prevSelectedTask === taskId ? null : taskId
    );
  };

  const [newTask, setNewTask] = useState({
    name: "",
    clients: "",
    email: "",
    details: "",
    date: "",
    price: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const createTask = (e) => {
    e.preventDefault();
    const newTaskWithId = { ...newTask, id: Date.now() };
    const updatedTasks = [...tasks, newTaskWithId];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setNewTask({
      name: "",
      clients: "",
      email: "",
      details: "",
      date: "",
      price: "",
    });

    toggleVisibility();
  };
  {
    /*local storage does not provide ditrect manipulation */
  }
  const deleteTask = (taskId) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="grid grid-cols-9">
        <div className="col-span-2 h-[100vh] border border-1 bg-5">
          <Header />
        </div>

        <div className="col-span-4 h-[100vh] bg-1">
          <div className="flex flex-wrap">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="box bg-3 flex-center flex-col h-auto m-4 w-[300px] mt-[3rem] p-4 rounded-xl shadow-lg "
                onClick={() => toggleTask(task.id)}
              >
                <h2 className="text-6 flex-center text-3xl cursor-pointer">
                  {task.name}
                </h2>
                <p className="flex-center text-5">Created on: {task.date}</p>
                <MdDeleteForever
                  className="text-6
                  text-3xl
                  cursor-pointer
                  absolute
                  top-5
          
                  right-2"
                  onClick={() => deleteTask(task.id)}
                />

                {selectedTask === task.id && (
                  <div className="text-6">
                    <p>Client: {task.clients}</p>
                    <p>Email: {task.email}</p>
                    <p>Details: {task.details}</p>
                    <p>Price: ${task.price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h1 className="absolute bottom-3 text-xl ml-5 text-5">
            Checked your
            <span
              onClick={() => navigate("/calender")}
              className="text-6 cursor-pointer"
            >
              {" "}
              calendar
            </span>{" "}
            today?
          </h1>
        </div>

        <div className="container col-span-3 h-[100vh] bg-1">
          <button
            className="absolute right-5 bottom-5 text-6xl"
            onClick={toggleVisibility}
          >
            <CgAddR />
          </button>

          <div className={isVisible ? "block" : "hidden"}>
            <div className="flex-center absolute top-18 right-5 border border-6 border-n-4 p-3 mt-5">
              <div className="bg-n-6 box w-[70vh]">
                <h1 className="text-center text-5xl font-serif text-5">
                  Create New Task
                </h1>
                <form onSubmit={createTask} className="flex flex-col">
                  <input
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                    type="text"
                    placeholder="Task Name"
                    value={newTask.name}
                    onChange={(e) =>
                      setNewTask({ ...newTask, name: e.target.value })
                    }
                  />
                  <input
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                    type="text"
                    placeholder="Client's Name"
                    value={newTask.clients}
                    onChange={(e) =>
                      setNewTask({ ...newTask, clients: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                    placeholder="Client's email"
                    value={newTask.email}
                    onChange={(e) =>
                      setNewTask({ ...newTask, email: e.target.value })
                    }
                  />
                  <textarea
                    type="text"
                    placeholder="Details"
                    value={newTask.details}
                    onChange={(e) =>
                      setNewTask({ ...newTask, details: e.target.value })
                    }
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                  />
                  <input
                    type="date"
                    placeholder="Deadline"
                    value={newTask.date}
                    onChange={(e) =>
                      setNewTask({ ...newTask, date: e.target.value })
                    }
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                  />
                  <input
                    type="number"
                    placeholder="Task price"
                    value={newTask.price}
                    onChange={(e) =>
                      setNewTask({ ...newTask, price: e.target.value })
                    }
                    className="m-3 text-5 p-2 border border-1 rounded-xl w-[30vw]"
                  />
                  <button
                    type="submit"
                    className="p-4 m-5 bg-n-9 text-1 text-center flex align-center w-[8vw] bg-6 rounded-xl"
                  >
                    Add Task
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
