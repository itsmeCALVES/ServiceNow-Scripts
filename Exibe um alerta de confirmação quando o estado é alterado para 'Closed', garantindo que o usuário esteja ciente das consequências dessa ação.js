// Exibe um alerta de confirmação quando o estado é alterado para 'Closed', garantindo que o usuário esteja ciente das consequências dessa ação
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'Closed') {
        alert('Você tem certeza de que deseja fechar este ticket? Essa ação é irreversível.');
    }
}
