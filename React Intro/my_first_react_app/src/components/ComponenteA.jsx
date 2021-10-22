import React from "react";

function ComponenteA(props){
    return(
        <div className="componenteA">Componente A
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteA