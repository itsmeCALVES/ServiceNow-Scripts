// Business Rule - Quando um incidente é movido para 'In Progress', cria automaticamente três tarefas dependentes
// Cada tarefa representa uma etapa específica do processo de resolução de incidentes
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'In Progress' && previous.state != 'In Progress') {
        var task1 = new GlideRecord('task');
        task1.initialize();
        task1.short_description = 'Diagnóstico inicial';
        task1.parent = current.sys_id;
        task1.insert();

        var task2 = new GlideRecord('task');
        task2.initialize();
        task2.short_description = 'Ação corretiva';
        task2.parent = current.sys_id;
        task2.insert();

        var task3 = new GlideRecord('task');
        task3.initialize();
        task3.short_description = 'Verificação de solução';
        task3.parent = current.sys_id;
        task3.insert();
    }
})(current, previous);
