const { format } = require('date-fns')

let horaDespertar = "15:39:35"

const horaSoneca = 10
let tempoTocando = 10

const tocarAlarme = () => {
    const horaAgora = format(new Date(), "HH:mm:ss")
    console.log(horaAgora)

    if (horaAgora === horaDespertar) {
        clearInterval(ligar)

        const tocar = setInterval(() => {
            console.log('Beep beep!')
            tempoTocando--

            if (tempoTocando === 0) {
                clearInterval(tocar)
                ligar = setInterval(tocarAlarme, 1000)

                const horaAtual = new Date()
                const horaNovaDespertar = horaAtual.setSeconds(horaAtual.getSeconds() + horaSoneca)

                horaDespertar = format(horaNovaDespertar, "HH:mm:ss")
                console.log(`Soneca ativada. Próximo alarme as ${horaDespertar}`)

                tempoTocando = 10

            }
        }, 1000)


    }
}

let ligar = setInterval(tocarAlarme, 1000)