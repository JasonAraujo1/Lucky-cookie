


const abriBisc = document.querySelector('.biscoito')
const btnReset = document.querySelector('.btnReset')
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let frase = document.querySelector('.frase')

abriBisc.addEventListener('click', abrirBis)
btnReset.addEventListener('click', resetar)

function abrirBis(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide', 'show')
    let randomNumber = Math.round(Math.random() * 10)
    

    setTimeout(function() {
        screen2.classList.add('show'); // Adiciona a classe 'show' após um pequeno atraso para garantir a animação
    }, 200);
    

    switch(randomNumber){
        case 0:
            frase.innerHTML ='Uma fortuna inesperada está a caminho.'
            break
        case 1:
            frase.innerHTML = 'Um amor do passado ressurgirá em breve.'
            break
        case 2:
            frase.innerHTML = 'Um segredo do seu passado será revelado.' 
            break
        case 3:
            frase.innerHTML = 'Uma viagem transformadora está prestes a acontecer.'
            break
        case 4:
            frase.innerHTML = 'Um encontro marcado mudará seu destino para sempre.'
            break
        case 5:
            frase.innerHTML = 'Uma decisão importante aguarda sua coragem.'
            break
        case 6:
            frase.innerHTML = 'Um novo começo emergirá das cinzas do passado.'
            break
        case 7:
            frase.innerHTML = 'Um antigo inimigo retornará, mas você triunfará.'
            break
        case 8:
            frase.innerHTML = 'Uma jornada espiritual abrirá portas para o desconhecido.'
            break
        case 9:
            frase.innerHTML = 'Uma perda dolorosa será seguida por um renascimento surpreendente.'
            break
         case 10:
            frase.innerHTML = 'Um investimento audacioso trará recompensas além da imaginação.'
            break
        default:
            frase.innerHTML = 'Número inválido';
    }



}


function resetar(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    screen2.classList.remove('show'); // Remove a classe 'show' ao redefinir
}

