// Calcula e exibe a economia do cliente quando a quantidade ultrapassa um limite e aplica um desconto de 10%
// O campo 'savings' é atualizado dinamicamente com base no valor total economizado
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var quantity = parseInt(g_form.getValue('quantity'));
    var unitPrice = parseFloat(g_form.getValue('unit_price'));
    var totalCost = quantity * unitPrice;
    var discount = 0;

    // Aplica um desconto de 10% para compras acima de 100 unidades
    if (quantity > 100) {
        discount = totalCost * 0.10;
    }

    var discountedTotal = totalCost - discount;
    g_form.setValue('total_cost', discountedTotal.toFixed(2));
    g_form.setValue('savings', discount.toFixed(2)); // Exibe a economia total
}
