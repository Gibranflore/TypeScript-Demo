import { use, type Usable } from "react"
import { type user } from "./api/get-user-action"

interface Props {
    getUser: Usable<user>
}

export const ClientInformation = ({getUser}:Props) => {

const getuser = use(getUser)

    return (
        <div className="bg-gradient flex flex-col gap-4">ClientInformation
            <h1 className="text-white text-4xl text-thin">{getuser.name} - {getuser.id}</h1>
            
            <p className="text-white text-4xl">{getuser.location}</p>
            <p className="text-white text-4xl">{getuser.role}</p>
        </div>
    )
}
