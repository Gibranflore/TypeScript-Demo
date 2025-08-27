import { useRef } from "react"



export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const HandleInput = () => {
        console.log(inputRef.current?.value);
        inputRef.current?.select()
    }

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl text-white font-thin">Focus Screem</h1>
            <input type="text" 
                    className="block w-100 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoFocus
                    ref={inputRef}
            />
            <button type="button" 
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={HandleInput}
                    >auto Focus</button>
        </div>
    )
}
