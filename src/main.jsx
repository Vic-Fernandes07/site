import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: (
      <>
      <h2> Ops, ocorreu um problema! </h2>
      </>
    )
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
