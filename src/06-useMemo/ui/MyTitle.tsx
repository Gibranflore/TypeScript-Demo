import React from "react";

interface Props {
    title: string
}


export const MyTitle = React.memo(({title}: Props) => {
    console.log('mi titulo re-render');
    
    return (
    
        <div>{title}</div>
    )
})
