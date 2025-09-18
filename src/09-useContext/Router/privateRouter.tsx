import { use, type JSX } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element;
}

export const PrivateRouter = ({element}:Props) => {

    const {authStatus} = use(UserContext)

    if (authStatus === 'checking') {
        return <div>Loading</div>
    } 
    if (authStatus === 'authenticated') {
        return element
    }

    return <Navigate to='/login' replace/>
}
