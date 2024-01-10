import { TodoType } from "../../types/Todo/Todo";

const TodosItem: React.FC<TodoType> = (props) => {
  const todo = props;
  if (todo.tasks.length === 0) return <div>Pas de tâches</div>;
  return (
    <>
      <div className="flex flex-col gap-2">{todo.name}</div>
    </>
  );
};

export default TodosItem;
