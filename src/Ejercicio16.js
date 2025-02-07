/*Convertir cierta cantidad de minutos en horas y minutos, para la obtención de las horas utilizar división entera
con el operador OR bit a bit ( | ) y para los minutos restantes utilizar el operador MODULO. Mostrar el
resultado en consola utilizando Template String.*/

let minutos = 123;
function convercion(minutos) {
    let horas = minutos / 60 | 0;
    let minutosRestantes = minutos % 60;

    return console.log(`los minutos: ${minutos} son: ${horas} hrs. con ${minutosRestantes} min.`);

}

convercion(minutos);