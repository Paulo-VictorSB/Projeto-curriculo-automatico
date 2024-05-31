document.addEventListener("DOMContentLoaded", ()=> { // DOMContentLoaded = Quando o conteúdo da página for carregado, fazer:
    var nomeCompleto = localStorage.getItem('nomeCompleto') // Pega a informação guardada da primeira página.
    if (nomeCompleto) { // Se estiver conteúdo, executar:
        document.querySelector('#nomeCompleto').innerText = nomeCompleto // Adiciona os dados do valor para a o ID em questão.
    }
})