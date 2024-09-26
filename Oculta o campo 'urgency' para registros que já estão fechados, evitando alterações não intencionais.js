// Oculta o campo 'urgency' para registros que já estão fechados, evitando alterações não intencionais
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (g_form.getValue('state') == 'Closed') {
        g_form.setVisible('urgency', false);
    }
}
