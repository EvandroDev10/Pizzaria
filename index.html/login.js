document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e a senha estão corretos
    if (localStorage.getItem(username) === password) {
        // Armazena o nome do usuário logado
        localStorage.setItem('loggedInUser', username);
        // Redireciona para a página principal se o login for bem-sucedido
        window.location.href = 'index.html'; // Altere para o nome da sua página inicial
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
