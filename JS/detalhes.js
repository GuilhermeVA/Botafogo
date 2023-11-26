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


const atletaSelecionado = JSON.parse(sessionStorage.getItem('atletaSelecionado'));

document.getElementById('nome').innerHTML = atletaSelecionado.nome
document.getElementById('imagem').src = atletaSelecionado.imagem
document.getElementById('elenco').innerHTML = 'Elenco: ' + atletaSelecionado.elenco
document.getElementById('posicao').innerHTML = 'Posição: ' + atletaSelecionado.posicao
document.getElementById('descricao').innerHTML = 'Descrição: ' + atletaSelecionado.descricao
document.getElementById('nome_completo').innerHTML = 'Nome completo: ' + atletaSelecionado.nome_completo
document.getElementById('nascimento').innerHTML = 'Nascimento: ' + atletaSelecionado.nascimento
document.getElementById('altura').innerHTML = 'Altura: ' + atletaSelecionado.altura




/*    "id": 1,
        "elenco": "feminino",
        "nome": "INGRID SABINO",
        "posicao": "Goleira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ingrid-sabino.png",
        "descricao": "A goleira possui uma forte ligação com o futebol desde pequena. Assim como a maioria, Ingrid iniciou sua trajetória jogando com os meninos na rua. Como sempre se destacou entre os demais, passou a disputar campeonatos amadores espalhados pelo Rio até passar pela peneira realizada pelo Botafogo em 2020, onde foi aprovada e escolhida para fazer parte das Gloriosas.",
        "nome_completo": "Ingrid Sabino de Oliveira",
        "nascimento": "25/06/1997, Rio de Janeiro (RJ)",
        "altura": "1,72"


document.getElementById('container_atleta').addEventListener('click', function(){
    limparconteudo();

    jogadores.forEach((atleta) => (cria_cartao(atleta)));

  
})

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    container_atleta.id = 'container_atleta';
    const titulo = document.createElement('h3');
    titulo.id = 'nome_atleta';
    titulo.innerHTML = atleta.nome;
    const imagens = document.createElement('img');
    imagens.id = 'imagens';
    imagens.src = atleta.imagem;
    const saiba_mais = document.createElement('h3');
    saiba_mais.innerHTML = "Saiba mais"
    saiba_mais.id = 'saiba_mais'

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagens);
    container_atleta.appendChild(saiba_mais)
    
    container_atleta.addEventListener('click', function() {
        location.href = "detalhes.html";
    });

    div_container.appendChild(container_atleta);
}*/