// Esta UI Action reabre o incidente se ele estiver no estado 'Closed'
// O incidente é movido para o estado 'Reopened' e um comentário é adicionado aos 'work_notes'
if (current.state == 'Closed') {
    current.state = 'Reopened';
    current.work_notes = 'Incidente reaberto para revisão.';
    current.update();
    gs.addInfoMessage('O incidente foi reaberto com sucesso.');
} else {
    gs.addErrorMessage('O incidente não está fechado e não pode ser reaberto.');
}
