//for...in

// let person = {
//     name:"Ighor",
//     age:21,
//     weight:70.0
// }

// for(let property in person) {
//     console.log(property)
//     console.log(person.name)
// }

//for...of

// let name = 'Leda'
// let names = ['Ighor', 'Elisa', 'Leda']

// for(let char of names){
//     console.log(char)
// }

//While

// let i = 16798456131
// while(i > 10){
//     console.log(i)
//     i--
//     i ++
//     i /= 35;
// }

//for

// for(let i = 100; i > 0; i--){
//     //console.log(i)
//     if(i === 50){
//         break
//     }

//     console.log(i)
// }

//switch

// function calculate(number1, operator, number2) {
//     let result

//     switch(operator) {
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2
//             break
//         case '*':
//             result = number1 * number2
//             break 
//         case '/':
//             result = number1 / number2
//             break       
//         default:
//             console.log('Não implementado!')   
//             break
//     }

//     return result
// }

// console.log(calculate(4, '*', 9))

//if...else

// let temperatura = 37.4

// if(temperatura > 37.5){
//     console.log("Febre!")
// } else if(temperatura < 37.5 && temperatura >= 37) {
//     console.log("Febre Moderada")
// } else {
//     console.log("Tudo bem!")
// }

//Manipulando os Arrays

//let techs = ["HTML", "CSS", "JS"]

// Adicionar um item no fim
// techs.push("NODE.JS")
// Adicionar no começo
// techs.unshift("SQL")
// //Remover do fim
// techs.pop()
// Remover do começo
// techs.shift()
// Pegar somente alguns elementos do Array
// console.log(techs.slice(1,3))
// Remover 1 ou mais itens em qualquer posição do Array
// techs.splice(1, 2)
// Encontrar a posição de um elemento no array
// let index = techs.indexOf('NODE.JS')
// techs.splice(index, 1)

// console.log(techs)

//Transformar uma cadeia de caracteres em elementos de um array

// let word ="Manipulação"
// console.log(Array.from(word))

//Contar elementos de um array
//