import React, { useState } from "react";

const AddTodos: React.FC<{
  addTodos: (name: string) => void;
}> = ({ addTodos }) => {
  const [name, setName] = useState<string>("");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodos(name);
    setName("");
  };
  return (
    <>
      <form onSubmit={(e: React.SyntheticEvent) => onSubmit(e)}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-4"
          type="text"
          name="name"
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </>
  );
};

export default AddTodos;
