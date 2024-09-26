// Business Rule - Ao resolver um incidente, cria uma tarefa de revisão para o gerente revisar a resolução
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved' && !previous.state.nil()) {
        var task = new GlideRecord('task');
        task.initialize();
        task.short_description = 'Revisão de incidente resolvido: ' + current.number;
        task.assignment_group = 'manager_group';
        task.insert();
    }
})(current, previous);
