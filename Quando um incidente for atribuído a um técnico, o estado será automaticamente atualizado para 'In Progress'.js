// Quando um incidente for atribuído a um técnico, o estado será automaticamente atualizado para 'In Progress'
(function executeRule(current, previous /*null when async*/) {
    if (current.assigned_to && current.state == 'New') {
        current.state = 'In Progress';
    }
})(current, previous);
