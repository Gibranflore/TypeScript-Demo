import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'
import { TasksApp } from './05-useRef/taskApp'
import { ScrambleWords } from './05-useRef/gameApp'
import { ScrambleWordsCopy } from './05-useRef/gameApp copy'
// import { TrafficLight } from './useState/TrafficLight'

// import { TrafficLightEffect } from './useEffect/TrafficLightEffect'

// import { PokemonPage } from './03-Example/PokemonPage'
// import { FocusScreen } from './04-useReff/FocusScreen'
// import { TrafficLightEffectHook } from './02-useEffect/TrafficLightEffectHook'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FocusScreen/> */}
    {/* <PokemonPage/> */}
    {/* <TrafficLightEffectHook/> */}
    {/* <HookApp/> */}
    {/* <TasksApp/> */}
    <ScrambleWordsCopy/>
  </StrictMode>,
)
