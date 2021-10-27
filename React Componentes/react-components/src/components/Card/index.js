import {useState} from "react";
import Button from "../Button";

const Card = () => {

    const [ valor, setValor ] = useState(0)

    const Adicionar = () => {
        setValor(valor + 1);
    }
    const Remover = () => {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Primeiro card Title
            </div>
            <div className="card-body">
                <h5 className="card-title">card-body Title</h5>
                <p className="card-text">card-body body </p>
                <Button tipo="btn btn-success" funcao={Adicionar}>
                    Adicionar
                </Button>
                <Button tipo="btn btn-danger" funcao={Remover}>
                    Remover
                </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;