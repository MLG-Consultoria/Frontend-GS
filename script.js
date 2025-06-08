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