import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import Patios from "./components/patios/Patios.jsx";
import PatioSul from "./components/patiosul/PatioSul.jsx";
import PatioNorte from "./components/pationorte/PatioNorte.jsx";
import PatioCentral from "./components/patiocentral/PatioCentral.jsx"

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
   path: "/patiosul", element: <PatioSul/>
  },
  {
    path: "/pationorte", element: <PatioNorte/>
  },
  {
    path: "/patiocentral", element: <PatioCentral/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
