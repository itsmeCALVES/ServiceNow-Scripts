// Client Script - Mostra uma mensagem ao carregar o formulário se o campo 'priority' for '1'
function onLoad() {
    if (g_form.getValue('priority') == '1') {
        g_form.addInfoMessage('Essa tarefa é de alta prioridade!');
    }
}
