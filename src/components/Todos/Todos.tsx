import { useState } from "react";
import AddTodos from "./AddTodos";
import { TodosListType, TodoType } from "../../types/Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import TodosItem from "./TodosItem";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<TodosListType>([]);
  const addTodos = (name: string) => {
    const todo: TodoType = { id: uuidv4(), name: name, tasks: [] };
    setTodos([...todos, todo]);
  };

  return (
    <>
      <div className="mb-8">
        <AddTodos addTodos={addTodos} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {todos.map((todo) => {
          return <TodosItem key={todo.id} todo={todo} />;
        })}
      </div>
    </>
  );
};

export default Todos;
