import { createBrowserRouter } from "react-router";
import SignUp from "../components/auth/signUp/SignUp";
import Login from "../components/auth/login/Login";
import Layout from "../components/layout/Layout";
import NowPlaying from "../components/movies/NowPlaying";

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <NowPlaying/>
            }
        ]
    },


])

export default router;