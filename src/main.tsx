import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { MemoApp } from './06-useMemo/memoApp'
// import { HookApp } from './HookApp'
// import { TasksApp } from './05-useRef/taskApp'
// import { ScrambleWords } from './05-useRef/gameApp'
import { ScrambleWordsCopy } from './05-useRef/gameApp copy'
// import { TrafficLight } from './useState/TrafficLight'

// import { TrafficLightEffect } from './useEffect/TrafficLightEffect'

// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user-action'
// import { MemoCounter } from './06-useMemo/MemoCounter'
// import { PokemonPage } from './03-Example/PokemonPage'
// import { FocusScreen } from './04-useReff/FocusScreen'
// import { TrafficLightEffectHook } from './02-useEffect/TrafficLightEffectHook'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <Toaster/>

    <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-4xl text-white'>Cargando...</h1>
      </div>
    }>
      {/* <ClientInformation getUser={getUserAction(1458)}/> */}
    </Suspense>
    {/* <InstagromApp/> */}
    {/* <MemoCounter/> */}
    {/* <MemoApp/> */}
    {/* <FocusScreen/> */}
    {/* <PokemonPage/> */}
    {/* <TrafficLightEffectHook/> */}
    {/* <HookApp/> */}
    {/* <TasksApp/> */}
    <ScrambleWordsCopy/>
  </StrictMode>,
)
