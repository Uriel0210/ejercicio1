let minutos = 123;
function convercion(minutos) {
    let horas = minutos / 60 | 0;
    let minutosRestantes = minutos % 60;

    return console.log(`los minutos: ${minutos} son: ${horas} hrs. con ${minutosRestantes} min.`);

}

convercion(minutos);