import React, { useState } from "react";

const AddTasks: React.FC<{
  addTasks: (name: string) => void;
}> = ({ addTasks }) => {
  const [task, setTask] = useState<string>("");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTasks(task);
    setTask("");
  };
  return (
    <>
      <form onSubmit={(e: React.SyntheticEvent) => onSubmit(e)}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-4"
          type="text"
          name="name"
          value={task}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTask(e.currentTarget.value)
          }
        />
        <button
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          type="submit"
        >
          +
        </button>
      </form>
    </>
  );
};

export default AddTasks;
