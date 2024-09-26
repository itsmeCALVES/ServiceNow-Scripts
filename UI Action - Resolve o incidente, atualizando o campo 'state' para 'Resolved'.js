// Esta UI Action resolve o incidente, atualizando o campo 'state' para 'Resolved'
// Exibe uma mensagem de sucesso ao usuário após a atualização
if (current.state != 'Resolved') {
    current.state = 'Resolved';
    current.update();
    gs.addInfoMessage('O incidente foi resolvido com sucesso.');
} else {
    gs.addErrorMessage('O incidente já está resolvido.');
}
