import React from "react";

const ButtonEvent = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
)

export default ButtonEvent