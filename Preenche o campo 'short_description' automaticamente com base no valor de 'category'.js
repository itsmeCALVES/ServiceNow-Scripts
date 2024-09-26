// Preenche o campo 'short_description' automaticamente com base no valor de 'category'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setValue('short_description', 'Categoria selecionada: ' + newValue);
}
