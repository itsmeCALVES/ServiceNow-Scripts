// Client Script - Preenche o campo 'vendor_info' dinamicamente com base nos dados do fornecedor selecionado e na localização do usuário
// Usa GlideRecord para buscar informações de duas tabelas diferentes ('vendor' e 'sys_user')
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    // Busca informações do fornecedor
    var vendorRecord = new GlideRecord('vendor');
    if (vendorRecord.get(newValue)) {
        var vendorLocation = vendorRecord.getValue('location');
        
        // Busca informações do usuário logado
        var userRecord = new GlideRecord('sys_user');
        if (userRecord.get(gs.getUserID())) {
            var userLocation = userRecord.getValue('location');

            // Atualiza o campo 'vendor_info' com base nos dados de ambas as tabelas
            g_form.setValue('vendor_info', 'Fornecedor: ' + vendorLocation + ', Localização do usuário: ' + userLocation);
        }
    }
}
