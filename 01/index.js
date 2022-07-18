const tabuada = (numero, cb) => {
    for (let i = 0; i <= 10; i++) {
        cb(`${numero} x ${i} = ${numero * i}`)
    }
}

const resultado = (resultado) => {
    console.log(resultado)
}

tabuada(5, resultado)
