// Business Rule - Envia uma notificação por e-mail para o gerente do grupo de suporte quando um SLA é violado
(function executeRule(current, previous /*null when async*/) {
    if (current.sla_due && current.sla_due < gs.nowDateTime()) {
        var manager = new GlideRecord('sys_user');
        manager.get(current.assignment_group.manager);
        gs.eventQueue('incident.sla_violation', current, manager);
    }
})(current, previous);
