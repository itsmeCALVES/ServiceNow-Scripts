// Esta UI Action cancela o incidente, alterando o estado para 'Canceled'
// Também adiciona uma anotação ao campo 'work_notes' para indicar o cancelamento
if (current.state != 'Canceled') {
    current.state = 'Canceled';
    current.work_notes = 'Incidente cancelado pelo usuário.';
    current.update();
    gs.addInfoMessage('O incidente foi cancelado com sucesso.');
} else {
    gs.addErrorMessage('O incidente já está cancelado.');
}
