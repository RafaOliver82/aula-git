//function digaOla(){
//    return "Olá!"
//}

//const digaOla = function() {
//    return 'Ola!'
//}

const digaOla = () => 'Olá!'

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual())

console.log(digaOla())
