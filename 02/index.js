const tabuadaMult = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x <= 10; x++) {
            cb(`${arr[i]} x ${x} = ${arr[i] * x}`)
        }
        console.log("------------")
    }
}

tabuadaMult([1, 5, 2, 9, 8], (resultado) => {
    console.log(resultado)
})