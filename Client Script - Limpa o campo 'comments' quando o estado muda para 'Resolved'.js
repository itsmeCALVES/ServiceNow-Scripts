// Client Script - Limpa o campo 'comments' quando o estado muda para 'Resolved'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (g_form.getValue('state') == 'Resolved') {
        g_form.clearValue('comments');
    }
}
