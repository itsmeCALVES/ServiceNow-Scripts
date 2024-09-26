// Ativa o campo 'related_problem' apenas quando a categoria é 'Problema'
// Isso evita que o campo apareça em solicitações de incidente ou mudanças
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    
    if (g_form.getValue('category') == 'Problema') {
        g_form.setReadOnly('related_problem', false);
    } else {
        g_form.setReadOnly('related_problem', true);
    }
}
