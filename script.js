let temaAtual = "";
let indiceQ = 0;

function irPara(id){
    document.querySelectorAll("section").forEach(s => s.style.display="none");
    document.getElementById(id).style.display="flex";
}

function iniciarJogo(tema){
    temaAtual = tema;
    indiceQ = 0;
    irPara("telaJogo");
    mostrarPergunta();
}

function mostrarPergunta(){
    const p = banco[temaAtual][indiceQ];

    document.getElementById("textoPergunta").innerText = p.q;

    const container = document.getElementById("containerOpcoes");
    container.innerHTML = "";

    p.ops.forEach((op,i)=>{
        const btn = document.createElement("button");
        btn.innerText = op;
        btn.onclick = ()=>checar(i);
        container.appendChild(btn);
    });
}

function checar(i){
    const p = banco[temaAtual][indiceQ];

    if(i === p.c){
        alert("Acertou!");
    }else{
        alert("Errou!");
    }

    indiceQ++;

    if(indiceQ < banco[temaAtual].length){
        mostrarPergunta();
    } else {
        alert("Fim do jogo!");
        irPara("telaTemas");
    }
}
