// Client Script - Altera o texto do campo 'short_description' para maiúsculas
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setValue('short_description', newValue.toUpperCase());
}
