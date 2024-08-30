import React from "react";

const Create = () => {
  return (
    <div className={`{isVisible ? "block" : "hidden"}`}>
      <div className="flex-center ">
        <div className="bg-n-6 h-[80vh] w-[90vh] ">
          <h1 className="text-center text-3xl fontFamily-grotesk text-1">
            Create New Task{" "}
          </h1>
          <form onSubmit={""} className="flex flex-col">
            <input
              className=""
              type="text"
              placeholder="Task Name"
              onChange={""}
            />
            <input type="text" placeholder="Client`s Name" onChange={""} />
            <input type="email" placeholder="Client`s email" onChange={""} />
            <textarea type="text" placeholder="Details" onChange={""} />
            <input type="number" placeholder="Deadline" onChange={""} />
            <input type="number" placeholder="Task price" onChange={""} />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
