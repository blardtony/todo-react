import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TodosPage from "../../pages/TodosPage";

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
    ],
  },
]);

export default router;
