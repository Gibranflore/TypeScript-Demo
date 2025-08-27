import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HookApp } from './HookApp'
//import { TrafficLight } from './useState/TrafficLight'

//import { TrafficLightEffect } from './useEffect/TrafficLightEffect'
//import { TrafficLightEffectHook } from './useEffect/TrafficLightEffectHook'
//import { PokemonPage } from './03-Example/PokemonPage'
import { FocusScreen } from './04-useReff/FocusScreen'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusScreen/>
    {/* <PokemonPage/> */}
    {/* <TrafficLightEffectHook/> */}
    {/* <HookApp/> */}
  </StrictMode>,
)
