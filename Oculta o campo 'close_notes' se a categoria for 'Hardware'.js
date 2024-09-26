// Oculta o campo 'close_notes' se a categoria for 'Hardware'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setVisible('close_notes', newValue != 'Hardware');
}
