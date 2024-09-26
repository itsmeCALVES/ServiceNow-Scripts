// Desabilita o campo 'assigned_to' após o formulário ser submetido
function onSubmit() {
    g_form.setReadOnly('assigned_to', true);
    return true;
}
