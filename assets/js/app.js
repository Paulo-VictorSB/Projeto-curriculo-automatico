function gerarCurriculo(){
    var nomeCompleto = document.querySelector('#nome-completo').value // pega o valor 
    localStorage.setItem('nomeCompleto', nomeCompleto) // salva a informacao do valor
    window.location.href = "assets/pages/curriculo.html" // redireciona o valor da informacao para outra page
}