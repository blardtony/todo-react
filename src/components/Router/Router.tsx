import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TodosPage from "../../pages/TodosPage";
import TodoPage from "../../pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Page non trouvée</div>,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <TodosPage />,
      },
      {
        path: "/:id",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
