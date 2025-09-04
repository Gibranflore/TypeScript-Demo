import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

//type TrafficLightColor = 'red' | 'yellow' | 'green' 

type TrafficLightColor = keyof typeof colors;


export const useTrafficLightEffectHook = () => {

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


  return {
    Light,
    countDown,
    colors,

    precentage: (countDown / 5 ) * 100,
    redLight: Light === 'red' ? colors.red : 'bg-blue-900',
    yellowLight: Light === 'yellow' ? colors.yellow : 'bg-blue-900',
    greenLight: Light === 'green' ? colors.green : 'bg-blue-900',

  }
}