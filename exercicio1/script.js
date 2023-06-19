
//cria a variavel botao e faz todas as alterações no botão que foi criado no arquivo html, cerquilha representa o id #botao/ponto representa a classe .botao
let botao = document.querySelector("#botao");
//botão azul
botao.style.background="blue";
let estaQuebrado=false;
let contaClikes=0;

/*funcão lambda e=>{código função} */
botao.addEventListener("mouseover",e =>{
    if(!estaQuebrado){
//troca a cor de fundo do botão antes estava azul 
        botao.style.background="green";
        botao.style.color="white";
    }
});

botao.addEventListener("mouseout",e =>{
    //troca a cor de fundo do botão para azul ao tirar o mouse antes estava verde 
    if(!estaQuebrado)    
        botao.style.background="blue";
    
});


botao.addEventListener("click",e =>{
    //troca a cor de fundo do botão para azul ao tirar o mouse antes estava verde 
        contaClikes++;
        if(contaClikes>=9){
            botao.style.background="red";
            botao.innerHTML="quebrei";
            estaQuebrado=true;
        }
    });