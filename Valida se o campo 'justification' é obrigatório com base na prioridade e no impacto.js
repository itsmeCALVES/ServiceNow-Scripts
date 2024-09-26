// Valida se o campo 'justification' é obrigatório com base na prioridade e no impacto
// O campo se torna obrigatório quando a prioridade é alta e o impacto é 'High'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var priority = g_form.getValue('priority');
    var impact = g_form.getValue('impact');

    if (priority == '1' && impact == 'High') {
        g_form.setMandatory('justification', true);
    } else {
        g_form.setMandatory('justification', false);
    }
}
