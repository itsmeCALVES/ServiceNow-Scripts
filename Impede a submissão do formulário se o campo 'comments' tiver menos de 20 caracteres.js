// Impede a submissão do formulário se o campo 'comments' tiver menos de 20 caracteres
// Isso garante que os comentários forneçam informações detalhadas e úteis
function onSubmit() {
    var comments = g_form.getValue('comments');
    if (comments.length < 20) {
        g_form.addErrorMessage('Os comentários devem ter pelo menos 20 caracteres.');
        return false; // Bloqueia o envio do formulário
    }
    return true;
}
