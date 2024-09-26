// Impede que um incidente seja alterado se ele já estiver no estado 'Closed'
(function onBefore(current, previous) {
    if (current.state == 'Closed') {
        gs.addErrorMessage('Não é possível modificar incidentes que já estão fechados.');
        current.setAbortAction(true);
    }
})(current, previous);
