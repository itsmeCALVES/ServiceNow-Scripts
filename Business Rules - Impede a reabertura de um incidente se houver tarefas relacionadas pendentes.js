// Business Rules - Impede a reabertura de um incidente se houver tarefas relacionadas pendentes
(function onBefore(current, previous) {
    if (current.state == 'Reopened') {
        var task = new GlideRecord('task');
        task.addQuery('parent', current.sys_id);
        task.addQuery('state', '!=', 'Closed');
        task.query();
        
        if (task.hasNext()) {
            gs.addErrorMessage('Não é possível reabrir o incidente com tarefas pendentes.');
            current.setAbortAction(true); // Aborta a reabertura
        }
    }
})(current, previous);
