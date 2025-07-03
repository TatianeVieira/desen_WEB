document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formFornecedor");
  
    form.addEventListener("submit", function (event) {
      const cnpj = form.elements["cnpj"].value.trim();
      const nome = form.elements["nome"].value.trim();
      const telefone = form.elements["telefone"].value.trim();
      const email = form.elements["email"].value.trim();
      const endereco = form.elements["endereco"].value.trim();
      const data = form.elements["data_cadastro"].value;
      const tipo = form.elements["tipo"];
  
      // Validação do CNPJ (formato básico)
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      if (!cnpjRegex.test(cnpj)) {
        alert("Digite um CNPJ válido no formato 00.000.000/0000-00");
        event.preventDefault();
        return;
      }
  
      if (nome === "") {
        alert("O campo Nome é obrigatório.");
        event.preventDefault();
        return;
      }
  
      if (telefone === "") {
        alert("O campo Telefone é obrigatório.");
        event.preventDefault();
        return;
      }
  
      // Validação de e-mail simples
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "" || !emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        event.preventDefault();
        return;
      }
  
      if (endereco === "") {
        alert("O campo Endereço é obrigatório.");
        event.preventDefault();
        return;
      }
  
      if (data === "") {
        alert("Informe a data de cadastro.");
        event.preventDefault();
        return;
      }
  
      // Tipo de fornecedor (PJ ou PF) - já vem marcado por padrão
      let tipoSelecionado = false;
      for (let i = 0; i < tipo.length; i++) {
        if (tipo[i].checked) {
          tipoSelecionado = true;
          break;
        }
      }
  
      if (!tipoSelecionado) {
        alert("Selecione o tipo de fornecedor.");
        event.preventDefault();
        return;
      }
  
      alert("Formulário válido! Dados serão enviados.");
    });
  });
  