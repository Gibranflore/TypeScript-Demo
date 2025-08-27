import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

//type TrafficLightColor = 'red' | 'yellow' | 'green' 

type TrafficLightColor = keyof typeof colors;

export const TrafficLightEffect = () => {

  const [Light, setLight] = useState<TrafficLightColor>('red')
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    if (countDown === 0) return 
    const cleanEffectId = setInterval(() => {
      setCountDown((prev) => prev -1 )
    }, 1000)

    return () => {
      clearInterval(cleanEffectId)
    }
  }, [countDown])

  useEffect(() => {
    if (countDown > 0) return; 
      
      setCountDown(5);

      if (Light === 'red') {
        setLight('green')
        return;
      }
      if (Light === 'yellow') {
        setLight('red')
        return;
      }
      if (Light === 'green') {
        setLight('yellow')
        return;
      }
  }, [countDown, Light])
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Sémaforo usando useEffect</h1>
        <h2 className="text-white text-2xl">{countDown}</h2>

        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-pink-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countDown / 5) * 100}%` }}>

          </div>
        </div>

        <div className={`w-32 h-32 ${ Light === 'red' ? colors[Light] : 'bg-blue-900'} rounded-full`} ></div>

        <div className={`w-32 h-32 ${ Light === 'yellow' ? colors[Light] : 'bg-blue-900'} rounded-full`}></div>

        <div className={`w-32 h-32 ${ Light === 'green' ? colors[Light] : 'bg-blue-900'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
      </div>
    </div>
  );
};