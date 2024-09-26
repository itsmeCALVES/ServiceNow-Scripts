// Business Rule - Envia uma notificação ao grupo de suporte relevante quando um novo incidente é criado
(function executeRule(current, previous /*null when async*/) {
    gs.eventQueue('incident.created', current, current.assignment_group);
})(current, previous);
