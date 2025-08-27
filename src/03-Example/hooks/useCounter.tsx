import { useState } from 'react'

export const useCounter = (initialvalue: number = 1) => {
    
    const [counter, setcounter] = useState(1)
    
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
