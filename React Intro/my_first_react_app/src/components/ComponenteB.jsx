import React from "react";

function ComponenteB(props){
    return(
        <div className="componenteB">Componente B
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteB