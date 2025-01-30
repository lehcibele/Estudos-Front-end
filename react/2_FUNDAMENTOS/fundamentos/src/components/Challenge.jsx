const Challenge = () => {

    const valor1 = 10;
    const valor2 = 50;
    const handleSoma = () => {
        const soma = valor1 + valor2
        console.log(soma);
        
    };

    return(
        <div>
            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>
            <button onClick={handleSoma}>Somar Valores</button>
        </div>
    );


}

export default Challenge;