// Business Rule - Impede que um incidente seja fechado até que todas as tarefas de acompanhamento sejam concluídas
(function onBefore(current, previous) {
    if (current.state == 'Closed') {
        var task = new GlideRecord('task');
        task.addQuery('parent', current.sys_id);
        task.addQuery('state', '!=', 'Closed');
        task.query();

        if (task.hasNext()) {
            gs.addErrorMessage('Existem tarefas pendentes relacionadas a este incidente.');
            current.setAbortAction(true); // Aborta o fechamento
        }
    }
})(current, previous);
