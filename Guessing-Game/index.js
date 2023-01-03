// Variáveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Função CallBack
function handleTryClick(event){
   event.preventDefault() //Não faça o Padrão (Enviar o Form)

     const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        
        document.querySelector('.screen2 h2').innerHTML = `Você acertou em ${xAttempts} vezes.`
        
    }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    
    xAttempts = 1
}


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick
)