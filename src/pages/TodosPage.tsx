import Todos from "../components/Todos/Todos";

const TodosPage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Vos listes</h1>
      <Todos />
    </>
  );
};

export default TodosPage;
