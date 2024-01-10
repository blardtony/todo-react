import { Link } from "react-router-dom";
import { TodoType } from "../../types/Todo/Todo";

const TodosItem: React.FC<TodoType> = (props) => {
  const todo = props;
  if (todo.tasks.length === 0) return <div>Pas de tâches</div>;
  return (
    <>
      <Link
        to={`/${todo.id}`}
        className="h-16 border-2 border-[#121212] rounded flex justify-center items-center hover:bg-[#f5f5f5]"
      >
        {todo.name}
      </Link>
    </>
  );
};

export default TodosItem;
