function Counter(){
    let quantidade = 10;

function upquant(){
    quantidade = quantidade + 1;
    console.log(quantidade);
    document.getElementById("counter-box").innerHTML = quantidade;
}

    return (
        <>
           <h1 id="counter-box">{quantidade}</h1>
           <button onClick={upquant}>Aumentar</button>
        </>
    )
};

export default Counter;