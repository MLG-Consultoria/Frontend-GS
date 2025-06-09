/*--------------------Código para as caixinhas de perguntas no faq*--------------------*/
document.querySelectorAll('.faq-pergunta').forEach(botao => {
  botao.addEventListener('click', () => {
    const item = botao.closest('.faq-item');
    const resposta = item.querySelector('.faq-resposta');

    const estaAberto = resposta.classList.contains('aberto');

    // Fecha todos
    document.querySelectorAll('.faq-resposta').forEach(r => {
      r.classList.remove('aberto');
      r.style.maxHeight = null;
    });

    // Abre apenas o clicado
    if (!estaAberto) {
      resposta.classList.add('aberto');
      resposta.style.maxHeight = resposta.scrollHeight + 'px';
    }
  });
});

/*--------------------Código do Formulario de Contato--------------------*/
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome.length < 2) {
    alert("O nome deve conter pelo menos 2 letras.");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("O email precisa ser @gmail.com");
    return;
  }

  if (mensagem.length < 1) {
    alert("A mensagem não pode estar vazia.");
    return;
  }

  window.location.href = "obrigado.html";
});

/*--------------------Código para as caixinhas no index--------------------*/
function toggleSobre(caixa) {
  caixa.classList.toggle('ativo');
}