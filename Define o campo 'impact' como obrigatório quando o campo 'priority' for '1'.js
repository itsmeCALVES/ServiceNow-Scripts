// Define o campo 'impact' como obrigatório quando o campo 'priority' for '1'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setMandatory('impact', newValue == '1');
}
