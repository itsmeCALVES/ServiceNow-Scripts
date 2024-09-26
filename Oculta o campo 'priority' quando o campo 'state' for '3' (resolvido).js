// Oculta o campo 'priority' quando o campo 'state' for '3' (resolvido)
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (g_form.getValue('state') == '3') {
        g_form.setVisible('priority', false);
    }
}
