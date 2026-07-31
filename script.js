const animais = [
{
emoji:"🐶",
resposta:"Cachorro",
opcoes:["Gato","Cachorro","Leão"]
},
{
emoji:"🐱",
resposta:"Gato",
opcoes:["Macaco","Gato","Vaca"]
},
{
emoji:"🦁",
resposta:"Leão",
opcoes:["Leão","Tigre","Urso"]
},
{
emoji:"🐼",
resposta:"Panda",
opcoes:["Panda","Coala","Porco"]
},
{
emoji:"🐸",
resposta:"Sapo",
opcoes:["Peixe","Sapo","Pato"]
},
{
emoji:"🐵",
resposta:"Macaco",
opcoes:["Macaco","Coelho","Cavalo"]
},
{
emoji:"🐰",
resposta:"Coelho",
opcoes:["Coelho","Raposa","Gato"]
},
{
emoji:"🦊",
resposta:"Raposa",
opcoes:["Lobo","Raposa","Urso"]
}
];

let atual = 0;
let pontos = 0;

const emoji = document.getElementById("emoji");
const botoes = document.getElementById("botoes");
const resultado = document.getElementById("resultado");
const proximo = document.getElementById("proximo");

function embaralhar(array){
    return array.sort(()=>Math.random()-0.5);
}

function carregarAnimal(){

    if(atual>=animais.length){
        emoji.innerHTML="🏆";
        document.getElementById("pergunta").innerHTML="Fim do jogo!";
        botoes.innerHTML="";
        resultado.innerHTML=`Você fez ${pontos} de ${animais.length} pontos!`;
        proximo.style.display="none";
        return;
    }

    resultado.innerHTML="";

    let animal = animais[atual];

    emoji.innerHTML=animal.emoji;

    botoes.innerHTML="";

    embaralhar([...animal.opcoes]).forEach(opcao=>{

        let btn=document.createElement("button");
        btn.innerHTML=opcao;

        btn.onclick=()=>{

            if(opcao===animal.resposta){
                resultado.innerHTML="🎉 Acertou!";
                resultado.className="correto";
                pontos++;
            }else{
                resultado.innerHTML=`❌ Era ${animal.resposta}`;
                resultado.className="errado";
            }

            document.querySelectorAll(".botoes button").forEach(b=>b.disabled=true);

        };

        botoes.appendChild(btn);

    });

}

proximo.onclick=()=>{
    atual++;
    carregarAnimal();
};

carregarAnimal();
