function gerarCurriculo() {
    let nomeCompleto = document.querySelector('#nome-completo').value;
    let linkedin = document.querySelector('#linkedin').value;
    let endereco = document.querySelector('#endereco').value;
    let contatoNumero = document.querySelector('#contato-numero').value;
    let contatoEmail = document.querySelector('#contato-email').value;
    let resumo = document.querySelector('#area-texto').value;

    // Experiência Profissional 1
    let empresa1 = document.querySelector('#empresa-1').value;
    let cargo1 = document.querySelector('#cargo-1').value;
    let ramo1 = document.querySelector('#ramo-1').value;
    let inicio1 = document.querySelector('#inicio-1').value;
    let fim1 = document.querySelector('#fim-1').value;
    let li11 = document.querySelector('#li-1-1').value;
    let li12 = document.querySelector('#li-1-2').value;
    let li13 = document.querySelector('#li-1-3').value;

    // Experiência Profissional 2
    let empresa2 = document.querySelector('#empresa-2').value;
    let cargo2 = document.querySelector('#cargo-2').value;
    let ramo2 = document.querySelector('#ramo-2').value;
    let inicio2 = document.querySelector('#inicio-2').value;
    let fim2 = document.querySelector('#fim-2').value;
    let li21 = document.querySelector('#li-2-1').value;
    let li22 = document.querySelector('#li-2-2').value;
    let li23 = document.querySelector('#li-2-3').value;

    // Formação Acadêmica 1
    let instituicao1 = document.querySelector('#instituicao-1').value;
    let curso1 = document.querySelector('#curso-1').value;
    let inicio3 = document.querySelector('#inicio-curso-1').value;
    let fim3 = document.querySelector('#fim-curso-1').value;
    let descricao1 = document.querySelector('#descricao-1').value;

    // Formação Acadêmica 2
    let instituicao2 = document.querySelector('#instituicao-2').value;
    let curso2 = document.querySelector('#curso-2').value;
    let inicio4 = document.querySelector('#inicio-curso-2').value;
    let fim4 = document.querySelector('#fim-curso-2').value;
    let descricao2 = document.querySelector('#descricao-2').value;

    // Salvando no localStorage
    localStorage.setItem('nomeCompleto', nomeCompleto);
    localStorage.setItem('linkedin', linkedin);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('contatoNumero', contatoNumero);
    localStorage.setItem('contatoEmail', contatoEmail);
    localStorage.setItem('resumo', resumo);
    localStorage.setItem('empresa1', empresa1);
    localStorage.setItem('cargo1', cargo1);
    localStorage.setItem('ramo1', ramo1);
    localStorage.setItem('inicio1', inicio1);
    localStorage.setItem('fim1', fim1);
    localStorage.setItem('li11', li11);
    localStorage.setItem('li12', li12);
    localStorage.setItem('li13', li13);
    localStorage.setItem('empresa2', empresa2);
    localStorage.setItem('cargo2', cargo2);
    localStorage.setItem('ramo2', ramo2);
    localStorage.setItem('inicio2', inicio2);
    localStorage.setItem('fim2', fim2);
    localStorage.setItem('li21', li21);
    localStorage.setItem('li22', li22);
    localStorage.setItem('li23', li23);
    localStorage.setItem('instituicao1', instituicao1);
    localStorage.setItem('curso1', curso1);
    localStorage.setItem('inicio3', inicio3);
    localStorage.setItem('fim3', fim3);
    localStorage.setItem('descricao1', descricao1);
    localStorage.setItem('instituicao2', instituicao2);
    localStorage.setItem('curso2', curso2);
    localStorage.setItem('inicio4', inicio4);
    localStorage.setItem('fim4', fim4);
    localStorage.setItem('descricao2', descricao2);

    // Redirecionar para a página do currículo
    window.location.href = "assets/pages/curriculo.html";
}
