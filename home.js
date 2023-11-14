let token = sessionStorage.getItem('token');
if (token === null){
    window.location.href = 'index.html';
    alert('Você não está autenticado. É necessário fazer o login primeiro.');

}


function sair(){
    sessionStorage.removeItem('token')
    window.location.href = 'index.html'
}