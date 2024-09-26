// Business Rule - Cria automaticamente uma tarefa de acompanhamento quando o incidente for reaberto
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Reopened') {
        var task = new GlideRecord('task');
        task.initialize();
        task.short_description = 'Tarefa relacionada ao incidente reaberto';
        task.insert();
    }
})(current, previous);
