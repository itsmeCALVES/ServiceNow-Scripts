// Preenche o campo 'location' com base no solicitante selecionado
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    var userRecord = new GlideRecord('sys_user');
    userRecord.get(newValue);
    g_form.setValue('location', userRecord.location);
}
