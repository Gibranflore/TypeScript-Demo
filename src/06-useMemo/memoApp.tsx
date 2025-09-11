import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"



export const MemoApp = () => {

    const [title, setTitle] = useState('hola')
    const [subtitle, setSubtitle] = useState('mundo')

    const handleApiCall = useCallback(() => {
        console.log('Estoy llamando a mi api', subtitle);
        
    },[subtitle])


    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoHook</h1>

            <MyTitle title={title}/>
            <MySubTitle subtitle={subtitle} callMyApi={handleApiCall}/>

            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            //onClick={() => setTitle('Como les va'+ new Date())}
            onClick={() => setTitle('Como les va')}
            >Cambiar Titulo</button>

            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => setSubtitle('Compañeros')}
            >Cmabiar subtitulo</button>

        </div>
    )
}
