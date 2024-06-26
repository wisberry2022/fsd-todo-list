import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error404Page } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
