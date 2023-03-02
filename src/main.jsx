import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Quizz from "./pages/Quizz";
import Admin from "./pages/Admin";
import { Provider } from "hooks-for-redux";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/quizz",
                element: <Quizz />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
