// Client Script para tornar o campo 'short_description' obrigatório se o estado for 'Closed'
if (g_form.getValue('state') == 'closed') {
    g_form.setMandatory('short_description', true);
} else {
    g_form.setMandatory('short_description', false);
}
