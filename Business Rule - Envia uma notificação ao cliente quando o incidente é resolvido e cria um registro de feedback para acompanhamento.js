// Business Rule - Envia uma notificação ao cliente quando o incidente é resolvido e cria um registro de feedback para acompanhamento
// Isso melhora a comunicação com o cliente e garante que o feedback seja capturado
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved' && previous.state != 'Resolved') {
        gs.eventQueue('incident.resolved_notification', current, current.caller_id);

        var feedback = new GlideRecord('feedback');
        feedback.initialize();
        feedback.short_description = 'Feedback para incidente: ' + current.number;
        feedback.incident = current.sys_id;
        feedback.caller_id = current.caller_id;
        feedback.insert();
    }
})(current, previous);
