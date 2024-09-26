// Client Script - Torna os campos 'short_description', 'priority' e 'impact' somente leitura após o formulário ser enviado
// Isso evita alterações em campos críticos depois que o ticket foi processado
function onSubmit() {
    g_form.setReadOnly('short_description', true);
    g_form.setReadOnly('priority', true);
    g_form.setReadOnly('impact', true);

    return true;
}
