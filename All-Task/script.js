//Task-01
// alert("Iremos somar 2 números")
// var number1 = prompt("Digite o primeiro número:")
// var number2 = prompt("Digite o segundo número:")
// var resultado = Number(number1) + Number(number2)

//alert("A soma dos números é de: " + resultado)

//Task-02
// alert("Vamos fazer as operações matemáticas!")
// var number1 = prompt("Digite o primeiro número:")
// var number2 = prompt("Digite o segundo número:")

// number1 = Number(number1)
// number2 = Number(number2)

// const sum = number1 + number2
// const sub = number1 - number2
// const multi = number1 * number2
// const div = number1 / number2

// alert("A soma dos números é de: " + sum)
// alert("A subtração dos números é de: " + sub)
// alert("A multiplicação dos números é de: " + multi)
// alert("A divisão dos números é de: " + div)

//Task-03
// var nome = prompt("Informe seu nome")
// var nota1 = prompt("Informe sua primeira nota:")
// var nota2 = prompt("Informe sua segunda nota:")
// var nota3 = prompt("Informe sua terceira nota:")

// nota1 = Number(nota1)
// nota2 = Number(nota2)
// nota3 = Number(nota3)

// const total = nota1 + nota2 + nota3 
// const result = total/3

// if(result >= 6){
//     alert("Aluno "+ nome +"com nota " + result + ". APROVADO!" )
// } else 
//     alert("Aluno "+ nome +"com nota " + result + ". REPROVADO!")

//Task-04

// let items = [];

// for(let item =0; item < 10; item++) {
//     let itemName = prompt("Digite o item " + (item + 1))

//     items[item] = itemName
// }

// alert(items)

//Task-05

// let result = prompt("Adivinhe o número que estou pensando, está entre 0 e 10")
// const randomNumber = Math.round(Math.random() * 10)

// let xAttempts = 1

// while(Number(result)!= randomNumber){
//     result = prompt("Erro, tente novamente")
//     xAttempts++
// }
//  alert(`Parabens! Você adivinhou em ${xAttempts} tentativas`)

//Task-06

// let option;
// let items = []

// while(option != 3){
//     option = Number(prompt(`
//     Olá usuário! Digite o número da opção desejada

//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//     `))

//     if(option == 1) {
//        let item = prompt("Digite o nome do item")
//        items.push(item)
//     }
//     else if (option == 2) { 

//         if(items.length == 0) {
//             alert("Não existem itens cadastrados")
//         } else {
//             alert(items)
//         }

//     } else {
//         alert("Tchau")
//     }

//     console.log(option, items)
        
// } 

//Task-07




   



