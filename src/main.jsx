import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Home from "./Components/Home/Home.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";

import "react-toastify/dist/ReactToastify.css";
import AlreadySignIn from "./Components/ProtectedRoute/AlreadySignIn.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import AddArt from "./Components/AddArt/AddArt.jsx";
import NonSignIn from "./Components/ProtectedRoute/NonSignIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: (
                    <AlreadySignIn>
                        <Login></Login>
                    </AlreadySignIn>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AlreadySignIn>
                        <SignUp></SignUp>
                    </AlreadySignIn>
                ),
            },
            {
                path: "/addart",
                element: (
                    <NonSignIn>
                        <AddArt></AddArt>
                    </NonSignIn>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </>
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>
);
