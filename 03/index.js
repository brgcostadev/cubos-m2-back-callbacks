const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"]
let i = 0

const rodada = () => {
    console.log(jogadores[i])
    i++
    if (i > jogadores.length - 1) {
        console.log('Finalizou')
        clearInterval(id)
    }
}

const time = 10000 / jogadores.length

const id = setInterval(rodada, time)