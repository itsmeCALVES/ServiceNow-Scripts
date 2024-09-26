// Verifica se o campo 'due_date' é pelo menos 1 dia útil à frente para tickets de baixa prioridade
// Isso evita que tickets de baixa prioridade tenham prazos apertados desnecessários
function onSubmit() {
    var priority = g_form.getValue('priority');
    var dueDate = new Date(g_form.getValue('due_date'));
    var today = new Date();
    
    // Verifica se a prioridade é '4' (Baixa) e a data de vencimento é no passado ou hoje
    if (priority == '4' && dueDate <= today) {
        g_form.addErrorMessage('Para tickets de baixa prioridade, a data de entrega deve ser pelo menos 1 dia útil à frente.');
        return false; // Impede o envio do formulário
    }
    return true;
}
