// Esta UI Action envia uma notificação de alerta ao solicitante
// A notificação alerta o solicitante sobre uma atualização crítica no incidente
var notification = new GlideRecord('sys_notification');
notification.initialize();
notification.short_description = 'Alerta sobre incidente: ' + current.number;
notification.recipients = current.caller_id.email;
notification.message = 'Seu incidente foi atualizado. Verifique o portal para mais detalhes.';
notification.insert();
gs.addInfoMessage('Notificação de alerta enviada com sucesso.');
