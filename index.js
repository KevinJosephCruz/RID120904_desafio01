const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Se o envio foi um sucesso, redireciona para a página de obrigado
            window.location.href = 'obrigado.html'; 
        } else {
            // Se deu erro, mostra um alerta
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});