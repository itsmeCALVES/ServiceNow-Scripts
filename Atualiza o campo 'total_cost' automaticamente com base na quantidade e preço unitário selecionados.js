// Atualiza o campo 'total_cost' automaticamente com base na quantidade e preço unitário selecionados
// A lógica faz uso da multiplicação de valores e adiciona uma verificação para evitar valores negativos
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var quantity = parseInt(g_form.getValue('quantity'));
    var unitPrice = parseFloat(g_form.getValue('unit_price'));

    if (quantity < 0 || unitPrice < 0) {
        g_form.addErrorMessage('A quantidade e o preço unitário não podem ser negativos.');
        return;
    }

    var totalCost = quantity * unitPrice;
    g_form.setValue('total_cost', totalCost.toFixed(2)); // Define o valor total com 2 casas decimais
}
