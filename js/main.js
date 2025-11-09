
  const btnNumbers = document.querySelectorAll(".rating > #listaBtn > li");
  console.log(btnNumbers);
  let = notaSelecionada = null;

  btnNumbers.forEach((li) => {
    console.log(li);
    

    li.addEventListener("click", (e) => {
        e.preventDefault();
      btnNumbers.forEach((btn) => {
        if(btn !== li) btn.classList.remove("ativo");
      });
      li.classList.toggle("ativo");

      notaSelecionada = li.textContent;
      
    });
    
  });

  const form = document.querySelector("form");
  console.log(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(notaSelecionada);

    if(!notaSelecionada){
        alert("Selecione uma nota antes de enviar!");
        return;
    }
    localStorage.setItem("nota", notaSelecionada);
    window.location.href = "message.html";
  })
