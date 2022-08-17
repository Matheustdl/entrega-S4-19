function oneThroughTwenty(){
    let meuretorno = []
    
    for(let i = 1; i <= 20; i = i + 1){
        meuretorno.push(i)
    }

    return meuretorno
}
console.log(oneThroughTwenty())



function evensToTwenty(){
    let meuretorno = []
    
    for(let i = 2; i <= 20; i = i + 2){
        meuretorno.push(i)
    }

    return meuretorno
}
console.log(evensToTwenty())




function oddsToTwenty(){
    let meuretorno = []
    
    for(let i = 1; i <= 19; i += 2){
        meuretorno.push(i)
    }
    
    return meuretorno
}
console.log(oddsToTwenty())


function multiplesOfFive(){
    let meuretorno = []
    
    for(let i = 5; i <= 100; i = i += 5){
        meuretorno.push(i)
    }
    
    return meuretorno
}
console.log(multiplesOfFive())



let numerosQuadrados = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

function squareNumbers(lista) {
    
    let meuRetorno = []
    for (let i = 0; i < lista.length; i++) {
        
        meuRetorno.push(lista[i])
        
    }
    return meuRetorno
}

console.log(squareNumbers(numerosQuadrados))


function countingBackwards(){
    let meuretorno = []
    
    for(let i = 20; i >= 1; i--){
        meuretorno.push(i)
    }
    
    return meuretorno
}
console.log(countingBackwards())


function evenNumbersBackwards(){
    let meuretorno = []

    for(let i = 20; i >= 2; i -= 2){
        meuretorno.push(i)
    }

    return meuretorno
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards(){
    let meuretorno = []

    for(let i = 19; i >= 1; i -= 2){
        meuretorno.push(i)
    }

    return meuretorno
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards(){
    let meuretorno = []

    for(let i = 100; i >= 5; i -= 5){
        meuretorno.push(i)
    }

    return meuretorno
}
console.log(multiplesOfFiveBackwards())


let decrementonumerosQuadrados = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

function squareNumbersBackwards(lista) {
    
    let meuRetorno = []
    for (let i = 10; i >= 1; i--) {
        
        meuRetorno.push(lista[i])
        
    }
    return meuRetorno
}

console.log(squareNumbersBackwards(numerosQuadrados))