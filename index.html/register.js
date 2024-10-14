// Função para verificar se o usuário já existe
function usuarioExiste(username) {
    return localStorage.getItem(username) !== null;
}

// Função para registrar um novo usuário
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Verifica se o usuário já existe
    if (usuarioExiste(newUsername)) {
        alert('Usuário já existe! Escolha outro nome.');
        return;
    }

    // Armazena o novo usuário no localStorage
    localStorage.setItem(newUsername, newPassword);

    // Exibe mensagem de sucesso
    document.getElementById('success-message').textContent = 'Usuário cadastrado com sucesso!';
    document.getElementById('register-form').reset(); // Limpa o formulário
});
