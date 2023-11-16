let token = sessionStorage.getItem('token');
if (token === null){
    window.location.href = 'index.html';
    alert('Você não está autenticado. É necessário fazer o login primeiro.');

}


function sair(){
    sessionStorage.removeItem('token')
    window.location.href = 'index.html'
}


const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    const imagens = document.createElement('img');
    imagens.src = atleta.imagem;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagens);

    div_container.appendChild(container_atleta);
}


function limparconteudo(){
    div_container.innerHTML = "";
}



document.getElementById('Todos').addEventListener('click', function(){
    limparconteudo();

    jogadores.forEach((atleta) => (cria_cartao(atleta)));

  
})

document.getElementById('Masculino').addEventListener('click', function(){
    limparconteudo();
    masculino.forEach((atleta) => (cria_cartao(atleta)));
      
    })

document.getElementById('Feminino').addEventListener('click', function(){
    limparconteudo();
    feminino.forEach((atleta) => (cria_cartao(atleta)));
          
     })    



    

