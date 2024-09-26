// Envia uma notificação para o gerente do usuário quando a prioridade for '1' e o estado for alterado para 'On Hold'
// Isso garante que os gerentes sejam alertados de tickets críticos que estão em espera
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var priority = g_form.getValue('priority');
    var state = g_form.getValue('state');

    if (priority == '1' && state == 'On Hold') {
        // Busca o gerente do usuário logado
        var user = new GlideRecord('sys_user');
        if (user.get(gs.getUserID())) {
            var manager = user.getValue('manager');
            // Envia uma notificação ao gerente
            gs.eventQueue('ticket.on_hold_notification', current, manager);
        }
    }
}
