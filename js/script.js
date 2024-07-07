
/* Tranformando o menu hamburguer em X */
//  const menuHamburguer = document.querySelector('.menu-hamburguer');
//  menuHamburguer.addEventListener('click', () => {
//     toggleMenu(); 
//  });

//  function toggleMenu() {
//     const nav = document.querySelector('.nav-responsive');
//     menuHamburguer.classList.toggle('change');

//     if (menuHamburguer.classList.contains ('change')) {
//         nav.style.display = 'block'

//     } else {
//         nav.style.display = 'none'
//     }
//  }

/* Transformando o menu hamburguer em X */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu(); 
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

/* Função para alternar a visibilidade do conteúdo "Read More" */
function toggleVisibility(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

/* Adicionando eventos de clique para os botões "Read More" */
document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); 
        const moreText = btn.previousElementSibling; 
        toggleVisibility(moreText);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (fullname.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Simulação de envio do formulário (substitua com sua lógica real de envio)
    submitForm(fullname, email, subject, message);
  });

  function submitForm(fullname, email, subject, message) {
    // Aqui você pode adicionar sua lógica para enviar os dados do formulário para o servidor
    // Por exemplo, usando fetch para enviar via AJAX

    // Simulação de envio:
    console.log('Simulando envio do formulário:');
    console.log('Nome Completo:', fullname);
    console.log('E-mail:', email);
    console.log('Assunto:', subject);
    console.log('Mensagem:', message);

    // Resetando o formulário após o envio (opcional)
    document.getElementById('contact-form').reset();
  }

