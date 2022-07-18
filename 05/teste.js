const { format } = require('date-fns')

const tempoDeSoneca = 10;

let horaParaDespertar = '14:58:35';
let tempoTocando = 10

function atualizarTempo() {
    const data = new Date();
    return format(data, 'HH:mm:ss');
};

const tocarAlarme = () => {
    const horaAgora = atualizarTempo();
    console.log(horaAgora);

    if (horaAgora === horaParaDespertar) {
        const tocar = setInterval(() => {
            console.log('beep beep!');
            tempoTocando--;

            if (tempoTocando === 0) {
                clearInterval(tocar);
                const horaAtual = new Date();
                const novaHoraParaDespertar = horaAtual.setSeconds(horaAtual.getSeconds() + tempoDeSoneca);

                horaParaDespertar = format(novaHoraParaDespertar, 'HH:mm:ss');
                console.log(`Soneca ativada. Próximo alarme as ${horaParaDespertar}`)

                tempoTocando = 10
                ligar = setInterval(tocarAlarme, 1000);
            }
        }, 1000);

        clearInterval(ligar);
    }
}

let ligar = setInterval(tocarAlarme, 1000);