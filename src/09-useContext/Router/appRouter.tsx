import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../Pages/Profile/ProfilePage";
import { LoaginPage } from "../Pages/auth/LoaginPage";
import { AboutPage } from "../Pages/About/AboutPage";
import { PrivateRouter } from "./privateRouter";


export const appRouter = createBrowserRouter([
    {
        path: "/profile",
        // element: <privateRouter element={<ProfilePage/>}/>
        element: <PrivateRouter element={<ProfilePage/>}/>
    },
    {
        path: "/login",
        element: <LoaginPage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "*",
        element: <Navigate to="/about"/>,
    },
]);
