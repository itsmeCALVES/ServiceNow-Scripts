// Client Script para tornar o campo 'short_description' não obrigatório se o estado for 'open'

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    var status = g_form.getValue('state');
    if (status == '1') {
        g_form.setMandatory('short_description', false);
    } else {
        g_form.setMandatory('short_description', true);
    }
}