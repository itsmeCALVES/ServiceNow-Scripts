// Business Rule - Impede que tickets com prioridade '1' sejam atribuídos a técnicos sem a certificação adequada
// A Business Rule valida se o técnico atribuído possui a certificação necessária
(function onBefore(current, previous) {
    if (current.priority == '1' && current.assigned_to) {
        var userCert = new GlideRecord('sys_user_certification');
        userCert.addQuery('user', current.assigned_to);
        userCert.addQuery('certification', 'Critical Incident Handling');
        userCert.query();

        if (!userCert.hasNext()) {
            gs.addErrorMessage('O técnico atribuído não possui a certificação necessária para lidar com incidentes críticos.');
            current.setAbortAction(true);
        }
    }
})(current, previous);
