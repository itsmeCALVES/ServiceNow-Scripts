// Client Script - Exibe uma mensagem de alerta quando o campo 'priority' for alterado para '1' (Urgent)
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == '1') {
        alert('Prioridade Urgente selecionada!');
    }
}
