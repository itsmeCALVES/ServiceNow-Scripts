// Client Script - Define 'Low' como valor padrão para o campo 'priority' ao carregar o formulário
function onLoad() {
    if (!g_form.getValue('priority')) {
        g_form.setValue('priority', '4');
    }
}
