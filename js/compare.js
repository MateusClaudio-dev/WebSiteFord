//listaDeCarros
let listaDeCarros = [];

class Carro {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.imagem = imagem;
    }
} 

// Procura na lista se a classe do carro existe, retornando a posição (índice) se encontrar ou -1 se não encontrar
function obterPosicaoDaListaDeCarros(lista, classeCarro) {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].nome === classeCarro.nome)
            return i;
    }
    return -1;
}
                                //checkBox  //atributos dos Carro
function definirCarroParaComparar(elemento, classeCarro) {
    if(classeCarro instanceof Carro){       
        if(elemento.checked){
            if (listaDeCarros.length >= 2) {
                alert('Você só pode selecionar no máximo dois veículos para comparação');
                elemento.checked = false
                return;
            }
            listaDeCarros.push(classeCarro); 

        } else { // O usuário desmarcou a caixinha.

          let posicao = obterPosicaoDaListaDeCarros(listaDeCarros, classeCarro)
          if (posicao !== -1) {
            listaDeCarros.splice(posicao, 1);
          }
        } 
    } else {
        throw "Você precisa definir uma Classe Carro válida";
    }
}

function exibirComparacao() {
    if(listaDeCarros.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    atualizarTabelaDeComparacao();
    document.getElementById("compare").style.display = "block";
}

function ocultarComparacao(){
    document.getElementById("compare").style.display = "none"; 
}

function atualizarTabelaDeComparacao() {
    for (let i = 0; i < 2; i++) {
        // Verifica se o carro realmente existe nessa posição da lista antes de tentar ler os dados
        if (listaDeCarros[i]) {
            document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${listaDeCarros[i].imagem}" class="photocar">`;
            document.getElementById(`compare_modelo_${i}`).innerText = listaDeCarros[i].nome;
            document.getElementById(`compare_alturacacamba_${i}`).innerText = listaDeCarros[i].alturaCacamba + ' (mm)';
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = listaDeCarros[i].alturaVeiculo + ' (mm)';
            document.getElementById(`compare_alturasolo_${i}`).innerText = listaDeCarros[i].alturaSolo + ' mm';
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = listaDeCarros[i].capacidadeCarga + ' Kg'; // Removido o "_de_"
            document.getElementById(`compare_motor_${i}`).innerText = listaDeCarros[i].motor + ' L';
            document.getElementById(`compare_potencia_${i}`).innerText = listaDeCarros[i].potencia + ' cv';
            document.getElementById(`compare_volumecacamba_${i}`).innerText = listaDeCarros[i].volumeCacamba + ' L';
            document.getElementById(`compare_roda_${i}`).innerText = listaDeCarros[i].roda;
            document.getElementById(`compare_preco_${i}`).innerText = 'R$ ' + listaDeCarros[i].preco.toLocaleString('pt-BR'); // Corrigido para toLocaleString
        } else {
            // Se não houver carro nessa posição (ex: limpando a tela), esvazia as células
            document.getElementById(`compare_image_${i}`).innerHTML = "";
            document.getElementById(`compare_modelo_${i}`).innerText = "";
            document.getElementById(`compare_alturacacamba_${i}`).innerText = "";
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = "";
            document.getElementById(`compare_alturasolo_${i}`).innerText = "";
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = "";
            document.getElementById(`compare_motor_${i}`).innerText = "";
            document.getElementById(`compare_potencia_${i}`).innerText = "";
            document.getElementById(`compare_volumecacamba_${i}`).innerText = "";
            document.getElementById(`compare_roda_${i}`).innerText = "";
            document.getElementById(`compare_preco_${i}`).innerText = "";
        }
    }   
}