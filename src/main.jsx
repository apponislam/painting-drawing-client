import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Components/Home/Home.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";

import "react-toastify/dist/ReactToastify.css";
import AlreadySignIn from "./Components/ProtectedRoute/AlreadySignIn.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import AddArt from "./Components/AddArt/AddArt.jsx";
import NonSignIn from "./Components/ProtectedRoute/NonSignIn.jsx";
import ViewDetails from "./Components/ViewDetails/ViewDetails.jsx";
import AllArt from "./Components/AllArt/AllArt.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import React from "react";
import MyArt from "./Components/MyArt/MyArt.jsx";
import Update from "./Components/MyArt/Update.jsx";
import SubCategory from "./Components/Home/SubCategory.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/allart"),
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
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/allart/${params.id}`),
                element: (
                    <NonSignIn>
                        <ViewDetails></ViewDetails>
                    </NonSignIn>
                ),
            },
            {
                path: "/allart",
                element: <AllArt></AllArt>,
                loader: () => fetch("http://localhost:5000/allart"),
            },
            {
                path: "/myart",
                element: (
                    <NonSignIn>
                        <MyArt></MyArt>
                    </NonSignIn>
                ),
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/allart/${params.id}`),
                element: (
                    <NonSignIn>
                        <Update></Update>
                    </NonSignIn>
                ),
            },
            {
                path: "/subid/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/allart/subid/${params.id}`),
                element: <SubCategory></SubCategory>,
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
