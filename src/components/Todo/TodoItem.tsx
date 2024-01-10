import { TodoItemType } from "../../types/Todo/Todo";

const TodoItem: React.FC<TodoItemType> = (props) => {
  const task = props;
  return (
    <div>
      <input
        id={`${task.id}-checkbox`}
        type="checkbox"
        className="hidden peer"
      />

      <label
        htmlFor={`${task.id}-checkbox`}
        className="inline-block cursor-pointer border-2 border-gray-800 px-5 py-2 peer-checked:line-through peer-checked:text-gray-500 rounded"
      >
        {task.name}
      </label>
    </div>
  );
};

export default TodoItem;
