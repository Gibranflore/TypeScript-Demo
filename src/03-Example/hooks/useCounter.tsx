import { useState } from 'react'

export const useCounter = (initialvalue: number = 1) => {
    
    const [counter, setcounter] = useState(initialvalue)
    
    const Add = () => {
        setcounter( counter + 1 )
    }
    const Decrement = () => {
        if(counter <= 0) return;
        setcounter( counter - 1 )
    }

    return {

        counter,

        Add,
        Decrement

    }
}
