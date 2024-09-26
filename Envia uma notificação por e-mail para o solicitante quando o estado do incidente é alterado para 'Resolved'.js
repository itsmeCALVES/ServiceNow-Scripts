// Envia uma notificação por e-mail para o solicitante quando o estado do incidente é alterado para 'Resolved'
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved') {
        gs.eventQueue('incident.resolved', current, current.caller_id);
    }
})(current, previous);
