// Client Script - Adiciona uma mensagem de erro se o campo 'due_date' estiver no passado
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    var dueDate = new Date(newValue);
    if (dueDate < new Date()) {
        g_form.addErrorMessage('A data de vencimento não pode estar no passado.');
    }
}
