// Impede o envio do formulário se o campo 'short_description' estiver vazio
function onSubmit() {
    if (g_form.getValue('short_description') == '') {
        alert('O campo Descrição Curta é obrigatório!');
        return false;
    }
    return true;
}
