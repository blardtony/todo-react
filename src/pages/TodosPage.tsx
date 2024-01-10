import TodosList from "../components/Todos/TodosList";


const TodosPage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Vos listes</h1>

      <TodosList  />
    </>
  );
};

export default TodosPage;
