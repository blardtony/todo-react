import { TodoItemType } from "../../types/Todo/Todo";
import TodoItem from "./TodoItem";

const Todo: React.FC<{ tasks: Array<TodoItemType> }> = ({ tasks }) => {
  if (tasks.length === 0) return <div>Pas de tâches</div>;
  return (
    <>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <TodoItem key={task.id} {...task} />;
        })}
      </div>
    </>
  );
};

export default Todo;
