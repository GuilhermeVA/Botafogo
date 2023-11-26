

let token = sessionStorage.getItem('token');
if (token === null){
    window.location.href = 'index.html';
    alert('Você não está autenticado. É necessário fazer o login primeiro.');

}

function sair(){
    sessionStorage.removeItem('token');
    window.location.href = 'index.html';
}

function voltar(){
    window.location.href = 'home.html';
}


document.addEventListener('DOMContentLoaded', function () {


const urlParams = new URLSearchParams(window.location.search);
const idAtleta = urlParams.get('id')

const atletaSelecionado = jogadores.find(jogador => jogador.id === parseInt(idAtleta));

if (atletaSelecionado) {
    document.getElementById('nome').innerHTML =  atletaSelecionado.nome;
    document.getElementById('imagem').src = atletaSelecionado.imagem;
    document.getElementById('elenco').innerHTML = 'Elenco: ' + atletaSelecionado.elenco;
    document.getElementById('posicao').innerHTML = 'Posição: ' + atletaSelecionado.posicao;
    document.getElementById('descricao').innerHTML = 'Descrição: ' + atletaSelecionado.descricao;
    document.getElementById('nome_completo').innerHTML = 'Nome completo: ' + atletaSelecionado.nome_completo;
    document.getElementById('nascimento').innerHTML = 'Nascimento: ' + atletaSelecionado.nascimento;
    document.getElementById('altura').innerHTML = 'Altura: ' + atletaSelecionado.altura;
} else {
    document.getElementById('nome').innerHTML =  'Atleta não encontrado';
}
});




