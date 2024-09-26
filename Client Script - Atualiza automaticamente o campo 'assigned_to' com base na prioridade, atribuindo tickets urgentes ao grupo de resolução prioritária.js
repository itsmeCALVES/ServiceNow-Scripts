// Client Script -  Atualiza automaticamente o campo 'assigned_to' com base na prioridade, atribuindo tickets urgentes ao grupo de resolução prioritária
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    
    if (g_form.getValue('priority') == '1') {
        g_form.setValue('assigned_to', 'priority_support_group');
    }
}
