// Business Rule - Cria automaticamente uma solicitação de mudança quando um incidente crítico é identificado
// Isso permite tratar automaticamente incidentes que precisam de ações de mudança
(function executeRule(current, previous /*null when async*/) {
    if (current.impact == 'Critical' && previous.impact != 'Critical') {
        var changeRequest = new GlideRecord('change_request');
        changeRequest.initialize();
        changeRequest.short_description = 'Mudança necessária para incidente crítico: ' + current.number;
        changeRequest.incident = current.sys_id;
        changeRequest.insert();
    }
})(current, previous);
