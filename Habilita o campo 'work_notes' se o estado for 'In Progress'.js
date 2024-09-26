// Habilita o campo 'work_notes' se o estado for 'In Progress'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setReadOnly('work_notes', newValue != 'In Progress');
}
