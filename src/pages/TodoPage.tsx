import { useParams } from "react-router-dom";
import todos from "../data/todos.json";
import Todo from "../components/Todo/Todo";
const TodoPage: React.FC = () => {
  const { id } = useParams();
  if (id === undefined) return <>Erreur params</>;

  const todo = todos.find((todo) => todo.id === Number(id));
  if (todo === undefined) return <>Liste non existante</>;
  return (
    <>
      <h1 className="text-3xl font-bold text-center">{todo.name}</h1>
      <Todo {...todo} />
    </>
  );
};

export default TodoPage;
