import { UserContext } from "@/09-useContext/context/userContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const {isAuthenticated, logout} = use(UserContext)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">

        <h1 className="text-4xl font-bold">Pagina Acerca de mi</h1>
        <hr/>

        <div className="flex-col flex gap-2">

          <Link to="/profile" className="hover:bg-blue-400 underline text-2xl">Perfil</Link>
          {
            isAuthenticated ?(
              <Button
                variant='destructive' className="mt-4" onClick={logout}
              >
                Salir
              </Button>
            ): (

              <Link to="/login" className="hover:bg-blue-400 underline text-2xl">Iniciar Sesion</Link>
          )}

        </div>
      </div>
    </>
  )
}
