// Business Rule - Gera um registro de auditoria sempre que o estado de um incidente de alta prioridade (prioridade 1) muda
// Isso garante que as mudanças em incidentes críticos sejam auditadas corretamente
(function executeRule(current, previous /*null when async*/) {
    if (current.priority == '1' && current.state != previous.state) {
        var audit = new GlideRecord('audit_log');
        audit.initialize();
        audit.incident = current.sys_id;
        audit.change_description = 'Estado alterado de ' + previous.state.getDisplayValue() + ' para ' + current.state.getDisplayValue();
        audit.changed_by = gs.getUserID();
        audit.insert();
    }
})(current, previous);
