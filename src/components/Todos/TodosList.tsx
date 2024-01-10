import todos from "../../data/todos.json";
import TodosItem from "./TodosItem";

const TodosList: React.FC = () => {
  if (!todos.length) return <>Pas de listes disponibles</>;
  return (
    <>
      {todos.map((todo) => {
        return <TodosItem key={todo.id} {...todo} />;
      })}
    </>
  );
};

export default TodosList;
