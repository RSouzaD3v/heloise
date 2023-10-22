let searchInput = document.querySelector('#search');
let btnProcurar = document.querySelector('#btnProcurar');
const date = new Date();
const currentDate = date.getFullYear();

console.log(currentDate);

btnProcurar.addEventListener('click', () => {
    let resultado = document.querySelector('.resultado');
    if(searchInput.value == "Quantos anos tem a Heloise ?"){
        resultado.innerHTML = `<h1>${currentDate - 2023} Anos</h1>`;
    }else if(searchInput.value == "Qual nome do pai ?"){
        resultado.innerHTML = `<h1>Rafael F. Souza</h1>`;
    }else if(searchInput.value == "Qual nome da mãe ?"){
        resultado.innerHTML = `<h1>Elizia Loureiro</h1>`
    }else{
        resultado.innerHTML = `<h1>Não temos essa informação ainda, <br/> Ou digitou a pergunta errado...</h1>`
    }
})