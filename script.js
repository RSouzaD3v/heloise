let searchInput = document.querySelector('#search');
let btnProcurar = document.querySelector('#btnProcurar');
const date = new Date();
const currentDate = date.getFullYear();
const month = date.getMonth() + 1;
let carregando = document.querySelector(".carregando");

btnProcurar.addEventListener('click', () => {
    let resultado = document.querySelector('.resultado');
    function question(procura){
        procura = searchInput.value;
        let results = {
            idade: `${currentDate - 2023} Anos / ${month - 9} Meses`,
            pai: "Rafael F. Souza",
            mae: "Elizia Loureiro"
        };

        return results[procura] || "Não temos essa informação ainda..."; 
    }

    resultado.innerHTML = `<h1>${question()}</h1>`;
});

