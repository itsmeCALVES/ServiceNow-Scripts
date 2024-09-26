// Client Script - Exibe uma mensagem de alerta se 'priority' for '1' e 'state' for 'In Progress'
// Isso garante que os usuários sejam alertados quando ambos os campos estiverem em um estado crítico
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var priority = g_form.getValue('priority');
    var state = g_form.getValue('state');

    if (priority == '1' && state == 'In Progress') {
        g_form.addInfoMessage('Atenção: Um ticket de alta prioridade está em andamento.');
    }
}
