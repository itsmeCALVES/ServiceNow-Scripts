// Client Script - Exige que um arquivo anexo seja carregado quando a categoria é 'Problema', garantindo que evidências visuais ou logs sejam incluídos
function onSubmit() {
    var category = g_form.getValue('category');
    var hasAttachments = g_form.hasAttachments();
    
    if (category == 'Problema' && !hasAttachments) {
        g_form.addErrorMessage('Um anexo é obrigatório para a categoria Problema.');
        return false; // Impede o envio
    }
    return true;
}
