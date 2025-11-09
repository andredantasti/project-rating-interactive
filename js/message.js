const nota = localStorage.getItem("nota");
const notaEl = document.getElementById("notaEscolhida");
console.log(notaEl)


if (nota) {
  notaEl.textContent = `You selected ${nota} out of 5`;
  localStorage.removeItem("nota"); // limpa depois de exibir (opcional)
} else {
  notaEl.textContent = "No rating selected 😅";
}