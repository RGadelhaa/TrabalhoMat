let Escolha = '';

function selectOptionPosition(position) {
         
  const buttons = document.querySelectorAll('.StyleBtn1');

  if (!Escolha) {
             
      buttons.forEach(btn => btn.classList.add('deselected'));
  }

  buttons.forEach(btn => btn.classList.remove('selected'));

  const selectedButton = document.getElementById(`btn${position}`);
  selectedButton.classList.add('selected');
  selectedButton.classList.remove('deselected');


  Escolha = position;

  buttons.forEach(btn => {
      if (btn !== selectedButton) {
           btn.classList.add('deselected');
      }
  });

  console.log('so o ouro');}

////////////////////////////////////////////////////////////////////////////////////////////
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrOx-zj0ggnH6TD4QK5GQAG1Z4BtkyLZOMIrfaf6uKJJzKGiWvnAxMRwwfWU3JZliw/exec';
const form = document.forms['contact-form'];
const submitButton = document.querySelector('button[type="submit"]');

function preencherFormulario() {
  const Escolha1 = Escolha;
  const Nome1 = document.getElementById("Choice").value;

  document.getElementById("campoNome").value = Nome1;
  document.getElementById("campoEscolha").value = Escolha1;
 
}

form.addEventListener('submit', e => {
  e.preventDefault(); 

  submitButton.disabled = true;

  const confirmacao = confirm("Somente confirme depois que fizer todos os tipos de downloads necessários");

  if (confirmacao) {
    preencherFormulario();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("Os dados foram enviados com sucesso.");
        window.location.reload();
      })
      .catch(error => {
        console.error('Erro!', error.message);
        alert("Ocoreu um erro, não foi possível enviar os dados")
        submitButton.disabled = false;
      });
  } else {
    alert("Envio cancelado.");
    submitButton.disabled = false;
  }
});
