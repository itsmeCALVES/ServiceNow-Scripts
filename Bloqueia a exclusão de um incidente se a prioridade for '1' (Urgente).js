// Bloqueia a exclusão de um incidente se a prioridade for '1' (Urgente)
(function onBefore(current, previous) {
    if (current.priority == '1') {
        gs.addErrorMessage('Não é possível excluir incidentes com prioridade urgente.');
        current.setAbortAction(true); // Aborta a exclusão
    }
})(current, previous);
