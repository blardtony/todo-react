import React, { useState } from "react";
import { TodoItemType, TodoType } from "../../types/Todo/Todo";
import AddTasks from "../Todo/AddTask";
import Todo from "../Todo/Todo";

const TodosItem: React.FC<{ todo: TodoType }> = ({ todo }) => {
  const [tasks, setTasks] = useState<Array<TodoItemType>>(todo.tasks);
  const addTasks = (name: string) => {
    const task: TodoItemType = {
      id: "sqnskn",
      name: name,
      description: "Description",
    };
    setTasks([...tasks, task]);
  };
  return (
    <>
      <div className="border-2 border-[#121212] rounded p-6" id={todo.id}>
        <h2 className="text-center font-bold text-2xl mb-4">{todo.name}</h2>
        <div>
          <AddTasks addTasks={addTasks} />
          <Todo tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default TodosItem;
