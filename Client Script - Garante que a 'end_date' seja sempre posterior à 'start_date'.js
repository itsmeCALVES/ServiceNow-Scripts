// Client Script - Garante que a 'end_date' seja sempre posterior à 'start_date'
// Se a 'end_date' for anterior à 'start_date', o campo é ajustado automaticamente
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var startDate = new Date(g_form.getValue('start_date'));
    var endDate = new Date(g_form.getValue('end_date'));

    if (endDate < startDate) {
        g_form.setValue('end_date', g_form.getValue('start_date')); // Ajusta 'end_date' para igualar a 'start_date'
        g_form.addInfoMessage('A data de término foi ajustada para ser posterior à data de início.');
    }
}
