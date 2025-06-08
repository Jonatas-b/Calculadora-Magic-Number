function calcular() {
    const valorCota = parseFloat(document.getElementById("valorCota").value);
    const dividendoCota = parseFloat(document.getElementById("dividendoCota").value);

    if (valorCota > 0 && dividendoCota > 0) {
      const quantidadeCotas = valorCota / dividendoCota;
      const valorTotal = quantidadeCotas * valorCota;

      document.getElementById("quantidadeCotas").textContent = quantidadeCotas.toFixed(2);
      document.getElementById("valorTotal").textContent = valorTotal.toFixed(2);
      document.getElementById("resultado").style.display = "block";
    } else {
      alert("Por favor, insira valores válidos maiores que zero.");
    }
  }