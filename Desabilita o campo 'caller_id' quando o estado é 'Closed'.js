// Desabilita o campo 'caller_id' quando o estado é 'Closed'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (g_form.getValue('state') == '7') { // 7 representa 'Closed'
        g_form.setDisabled('caller_id', true);
    }
}
