import { useTrafficLightEffectHook } from "./Hooks/useTraffictEffectHook";


export const TrafficLightEffectHook = () => {

  const { countDown, precentage, greenLight, yellowLight, redLight} = useTrafficLightEffectHook()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Sémaforo usando useEffect</h1>
        <h2 className="text-white text-2xl">{countDown}</h2>

        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-pink-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${precentage}%` }}>
          </div>
        </div>

        <div className={`w-32 h-32 ${greenLight } rounded-full`} ></div>

        <div className={`w-32 h-32 ${yellowLight } rounded-full`}></div>

        <div className={`w-32 h-32 ${redLight} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
      </div>
    </div>
  );
};