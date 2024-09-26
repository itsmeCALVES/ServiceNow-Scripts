// Preenche o campo 'assignment_group' com o valor do campo 'assigned_to' quando o último for alterado
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setValue('assignment_group', g_form.getValue('assigned_to'));
}
