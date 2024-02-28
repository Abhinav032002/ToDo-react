"use client";
import React, { useState } from "react";

const page = () => {
  const [Task, setTask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    setMainTask([...mainTask, { Task, desc }]);
    e.preventDefault();
    setTask("");
    setdesc("");
  };

  const handleDelete = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No tasks added</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="list-none flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h4 className="text-2xl text-slate-900 font-bold">{t.Task}</h4>
            <h6 className="text-xl text-slate-600 font-bold">{t.desc}</h6>
          </div>
          {/* <button
            onClick={(i) => {
              handleComplete(i);
            }}
            className="bg-red-500 text-white font-bold rounded px-4 py-2"
          >
            Done
          </button> */}
          <button
            onClick={() => {
              handleDelete(i);
            }}
            className="bg-blue-600 px-4 py-2 text-white font-bold rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black h-20 text-white text-center py-5 font-bold text-2xl">
        MY TODO APP
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Tasks here"
          className="text-2xl m-10 border-2 border-zinc-800 p-3 outline-none"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description here"
          className="text-2xl m-10 border-2 border-zinc-800 p-3 outline-none"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white p-2 text-2xl rounded hover:bg-zinc-700">
          Add Task
        </button>
      </form>
      <hr />
      <div className="m-5 text-center font-bold text-xl text-stone-700">
        {renderTask}
      </div>
    </>
  );
};

export default page;
