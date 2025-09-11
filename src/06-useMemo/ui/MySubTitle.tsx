import { memo } from "react";

interface Props {
    subtitle: string

    callMyApi: () => void
}

export const MySubTitle = memo(({subtitle, callMyApi}: Props) => {
  console.log('mi subtitulo re-render');
  return (
    <>
        <h4>{subtitle}</h4>
        <button
        onClick={callMyApi}
        >llamar a funcion </button>
    </>
  )
})
