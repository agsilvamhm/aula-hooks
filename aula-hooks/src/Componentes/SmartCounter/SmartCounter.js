import {useState} from 'react';

function SmartCounter(){
    // retorna um vetor
    // 1. variável stateful
    // 2. função amarrada a essa variável que atualiza esse valor.

    const [quantidade, upQuant] = useState(1);
    return (
        <>
            <h1>{quantidade}</h1>
            <button onClick={()=> upQuant(quantidade + 1)}>Aumentar</button>
        </>
    )
};

export default SmartCounter;