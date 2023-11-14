
function logar(){
    let senha = document.getElementById('senha').value
    let token = "um_token"
    
    if(senha == "senha"){
        alert('Sucesso');
        sessionStorage.setItem('token', token)
        location.href = "home.html";
    }
}