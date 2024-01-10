import todos from "../../data/todos.json";
import TodosItem from "./TodosItem";

const TodosList: React.FC = () => {
  if (!todos.length) return <>Pas de listes disponibles</>;
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ">
        {todos.map((todo) => {
          return <TodosItem key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
};

export default TodosList;
