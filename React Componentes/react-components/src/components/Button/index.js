const Button = ({children, tipo, funcao}) => {
    return (
        <button 
        type="button" 
        className={tipo} 
        onClick={funcao} 
        style={{margin: "3px"}}>
            {children}
        </button>
    )
}

export default Button;