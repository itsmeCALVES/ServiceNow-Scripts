// Business Rule - Ao resolver um incidente, cria uma tarefa de acompanhamento para garantir o acompanhamento adequado
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved') {
        var followUpTask = new GlideRecord('task');
        followUpTask.initialize();
        followUpTask.short_description = 'Acompanhamento do incidente resolvido: ' + current.number;
        followUpTask.insert();
    }
})(current, previous);
