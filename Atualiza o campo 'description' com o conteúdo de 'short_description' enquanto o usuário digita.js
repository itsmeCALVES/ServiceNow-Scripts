// Atualiza o campo 'description' com o conteúdo de 'short_description' enquanto o usuário digita
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setValue('description', newValue);
}
