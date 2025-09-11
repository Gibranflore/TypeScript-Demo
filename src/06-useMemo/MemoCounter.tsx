import { useCounter } from "@/03-Example/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationsNumber: number) => {
    console.time('Ejecutando_función_pesada...');
    
    for (let index = 0; index < iterationsNumber; index++) {
        console.log('ahi viene...');
        
    }

    console.timeEnd('Ejecutando_función_pesada...');
    return `${iterationsNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {

    const {counter,Add} = useCounter(500)
    const {counter: counter2 ,Add: Add2} = useCounter(10)
    const myHeavyStuff = useMemo( () => heavyStuff(counter),[counter])

    return (
        <div className="bg-gradient flex flex-col gap-1">
            
            <h1>Ejerciocio UseMEMO {myHeavyStuff}</h1>

            <hr/>

            <h4>
                Coouter: {counter}
                Counter2: {counter2}
            </h4>

            <button 
                className=" bg-emerald-700 text-shadow-yellow-300 px-4 rounded-md"
                onClick={Add}
            >
                +1
            </button>
            <button 
                className=" bg-emerald-700 text-shadow-yellow-300 px-4 rounded-md"
                onClick={Add2}
            >
                +1
            </button>

        </div>
    )
}
