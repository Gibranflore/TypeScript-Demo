import { RouterProvider } from "react-router"
import { appRouter } from "./Router/appRouter"
import { UserContextProvider } from "./context/userContext"


export const ProfesionalApp = () => {
    return (
        <UserContextProvider>


            <div className="bg-gradient flex-col text-4xl text-white">


                <RouterProvider router={appRouter}/>
            </div>
        </UserContextProvider>
        
    )
}
