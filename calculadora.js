let operacao = '';

function mostrarFormulario(simbolo) {
  operacao = simbolo;
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("resultado").innerText = '';
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
}

function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Digite valores válidos.";
  } else {
    switch (operacao) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          resultado = "Divisão por zero!";
        } else {
          resultado = n1 / n2;
        }
        break;
    }
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
