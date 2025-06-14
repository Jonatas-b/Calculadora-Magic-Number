function calcular() {
  const nomeAtivo = document.getElementById("nomeAtivo").value;
  const valorCota = parseFloat(document.getElementById("valorCota").value);
  const dividendoCota = parseFloat(document.getElementById("dividendoCota").value);

  if (!nomeAtivo || isNaN(valorCota) || isNaN(dividendoCota) || dividendoCota === 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const quantidadeCotas = Math.ceil(valorCota / dividendoCota);
  const valorTotal = quantidadeCotas * valorCota;

  document.getElementById("quantidadeCotas").textContent = quantidadeCotas;
  document.getElementById("valorTotal").textContent = valorTotal.toFixed(2);
  document.getElementById("resultado").style.display = "block";

  salvarNoHistorico(nomeAtivo, quantidadeCotas, valorTotal);
}

function limparCampos() {
  document.getElementById("nomeAtivo").value = "";
  document.getElementById("valorCota").value = "";
  document.getElementById("dividendoCota").value = "";
  document.getElementById("resultado").style.display = "none";
}

function salvarNoHistorico(ativo, cotas, valor) {
  const historico = JSON.parse(localStorage.getItem("historicoMagicNumber")) || [];
  historico.unshift({ ativo, cotas, valor });
  localStorage.setItem("historicoMagicNumber", JSON.stringify(historico));
  exibirHistorico();
}

function exibirHistorico() {
  const historicoLista = document.getElementById("historicoLista");
  historicoLista.innerHTML = "";

  const historico = JSON.parse(localStorage.getItem("historicoMagicNumber")) || [];

  historico.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.ativo}: ${item.cotas} cotas - R$ ${item.valor.toFixed(2)}`;
    historicoLista.appendChild(li);
  });
}

function limparHistorico() {
  localStorage.removeItem("historicoMagicNumber");
  exibirHistorico();
}

function abrirAba(id, event) {
  const abas = document.querySelectorAll(".tab-content");
  const botoes = document.querySelectorAll(".tab-button");

  abas.forEach((aba) => aba.classList.remove("active"));
  botoes.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}

// Exibir histórico ao carregar a página
window.onload = exibirHistorico;
