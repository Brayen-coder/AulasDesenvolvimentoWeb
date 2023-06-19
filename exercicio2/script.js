//document.querySelector("#"); campos de texto para digitar os numeros
const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");
//chama a função para calcular ao clickar o botão da pagina
botao.addEventListener("click",calcular);

//função para fazer o calculo
function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    if(operacao==="somar")
        resposta.innerHTML=valor1+valor2;
    if(operacao==="subtrair")
        resposta.innerHTML=valor1-valor2;
    if(operacao==="multiplicar")
        resposta.innerHTML=valor1*valor2;
    if(operacao==="dividir")
        resposta.innerHTML=valor1/valor2;
    
}