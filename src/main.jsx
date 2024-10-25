import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import Patios from "./components/patios/Patios.jsx";
import Escolha from "./components/escolha/Escolha.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <h2> Ops, ocorreu um problema! </h2>
      </>
    ),
  },
  {
    path: "/patios",
    element: <Patios />,
  },
  {
    path: "/escolha", element: <Escolha/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
