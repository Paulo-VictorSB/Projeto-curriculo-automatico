document.addEventListener("DOMContentLoaded", () => {
    // Recupera os dados do localStorage
    let nomeCompleto = localStorage.getItem('nomeCompleto');
    let linkedin = localStorage.getItem('linkedin');
    let endereco = localStorage.getItem('endereco');
    let contatoNumero = localStorage.getItem('contatoNumero');
    let contatoEmail = localStorage.getItem('contatoEmail');
    let resumo = localStorage.getItem('resumo');
    let empresa1 = localStorage.getItem('empresa1');
    let cargo1 = localStorage.getItem('cargo1');
    let ramo1 = localStorage.getItem('ramo1');
    let inicio1 = localStorage.getItem('inicio1');
    let fim1 = localStorage.getItem('fim1');
    let li11 = localStorage.getItem('li11');
    let li12 = localStorage.getItem('li12');
    let li13 = localStorage.getItem('li13');
    let empresa2 = localStorage.getItem('empresa2');
    let cargo2 = localStorage.getItem('cargo2');
    let ramo2 = localStorage.getItem('ramo2');
    let inicio2 = localStorage.getItem('inicio2');
    let fim2 = localStorage.getItem('fim2');
    let li21 = localStorage.getItem('li21');
    let li22 = localStorage.getItem('li22');
    let li23 = localStorage.getItem('li23');
    let instituicao1 = localStorage.getItem('instituicao1');
    let curso1 = localStorage.getItem('curso1');
    let inicio3 = localStorage.getItem('inicio3');
    let fim3 = localStorage.getItem('fim3');
    let descricao1 = localStorage.getItem('descricao1');
    let instituicao2 = localStorage.getItem('instituicao2');
    let curso2 = localStorage.getItem('curso2');
    let inicio4 = localStorage.getItem('inicio4');
    let fim4 = localStorage.getItem('fim4');
    let descricao2 = localStorage.getItem('descricao2');

    // Preenche o currículo com os dados armazenados
    document.querySelector('#nomeCompleto').textContent = nomeCompleto;
    document.querySelector('#linkedin').textContent = linkedin ? linkedin + ' | Linkedin' : '';
    document.querySelector('#endereco').textContent = 'Residência: ' + endereco;
    document.querySelector('#contatoNumero').textContent = contatoNumero;
    document.querySelector('#contatoEmail').textContent = contatoEmail;
    document.querySelector('#resumo').textContent = resumo;
    document.querySelector('#empresa-1').textContent = empresa1;
    document.querySelector('#cargo-1').textContent = cargo1;
    document.querySelector('#ramo-1').textContent = ramo1;
    document.querySelector('#periodo-1').textContent = inicio1 + ' - ' + fim1;
    document.querySelector('#li-1-1').textContent = li11;
    document.querySelector('#li-1-2').textContent = li12;
    document.querySelector('#li-1-3').textContent = li13;
    document.querySelector('#empresa-2').textContent = empresa2;
    document.querySelector('#cargo-2').textContent = cargo2;
    document.querySelector('#ramo-2').textContent = ramo2;
    document.querySelector('#periodo-2').textContent = inicio2 + ' - ' + fim2;
    document.querySelector('#li-2-1').textContent = li21;
    document.querySelector('#li-2-2').textContent = li22;
    document.querySelector('#li-2-3').textContent = li23;
    document.querySelector('#instituicao-1').textContent = instituicao1;
    document.querySelector('#curso-1').innerHTML = curso1;
    document.getElementById('periodo-curso-1').textContent = inicio3 + ' - ' + fim3; 
    document.querySelector('#descricao-1').textContent = descricao1;
    document.querySelector('#instituicao-2').textContent = instituicao2;
    document.querySelector('#periodo-curso-2').textContent = inicio4 + ' - ' + fim4;
    document.querySelector('#descricao-2').textContent = descricao2;
});
