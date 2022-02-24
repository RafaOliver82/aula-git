function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

soma()

//NaN = Not a Number

soma(true, false)

//true = 1 e false = 0 (Linguagem binário)
//concatenar strings = '1' + '1' = '11' ou com nomes = 'Rafael' + ' Oliveira' = Rafael Oliveira

function podeTirarCnh (idade){
    if (idade < 18){
        return 'Pessoa menor de idade. Infelizmente não pode tirar CNH'
    } else {
        return 'Opa, pode tirar CNH'
    }
}
//escrever função para adicionar filmes e excluir filmes (pop e push)