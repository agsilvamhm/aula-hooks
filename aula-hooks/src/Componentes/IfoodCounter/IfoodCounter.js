import React, { useState, useEffect } from "react";
import '../IfoodCounter/IfoodCounter.css';

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle]= useState("counter-button-minus-active")

    useEffect(()=>{
       console.log(`o estilo de botao atual é: ${buttonStyle}`)
    },[buttonStyle])

function down(){
    if (value <= 1){
        //mudar o css
        setButtonStyle("counter-button-minus-desactive");
    } 

    if (value > 0) {
        setValue(value - 1);
    }
}

function up(){
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active")
}


  return (
    <div className="counter-wrapper">
        <button onClick={down} className={buttonStyle}>
            -
        </button>
        <p>{value}</p>
        <button onClick={up} className="counter-button-plus-active">
            +
        </button>
        <br/>
        <button id="moeda">12,00</button>
    </div>
  )
}

