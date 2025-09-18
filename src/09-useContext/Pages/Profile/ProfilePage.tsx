import { UserContext } from "@/09-useContext/context/userContext"
import { Button } from "@/components/ui/button"
import { use } from "react"



export const ProfilePage = () => {

  const {logout} = use(UserContext)

  const {user} = use(UserContext)

  return (
    <>
      <div className=" flex flex-col item-center justify-center min-h-screen">
        <h1 className="text-4xl">Perfil de usuario</h1>
        <hr/>
        <pre className="my-4 W-[80%] overflow-X-auto">{JSON.stringify(user, null, 2)}</pre>

        <Button
          onClick={logout}
          variant="destructive">sallir</Button>

      </div>
    </>
  )
}
