const { format } = require('date-fns')

const alarme = "18:57:20";
let tempoAlarmandoEmSegundos = 10;
let beep = () => console.log("Beep beep")

const alarmeTemporizador = () => {
    console.log(format(new Date(), "HH:mm:ss"))

    if (format(new Date(), "HH:mm:ss") == alarme) {
        for (let i = 0; i < tempoAlarmandoEmSegundos; i++) {
            setTimeout(beep, 1000 * i)
        }

        clearInterval(segundos)
    }
}

const segundos = setInterval(alarmeTemporizador, 1000)