// Esta UI Action fecha o incidente, alterando o estado para 'Closed'
// Verifica se o incidente já está fechado antes de realizar a ação
if (current.state != 'Closed') {
    current.state = 'Closed';
    current.update();
    gs.addInfoMessage('O incidente foi fechado com sucesso.');
} else {
    gs.addErrorMessage('O incidente já está fechado.');
}
