// Client Script - Preenche dinamicamente os campos 'assigned_to', 'location', e 'work_notes' com base no grupo selecionado
// A lógica envolve a recuperação de dados de uma tabela relacionada (sys_user) e preenchimento de múltiplos campos
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    // Consulta para buscar o primeiro membro do grupo selecionado
    var userGroup = new GlideRecord('sys_user_grmember');
    userGroup.addQuery('group', newValue);
    userGroup.setLimit(1);
    userGroup.query();

    if (userGroup.next()) {
        g_form.setValue('assigned_to', userGroup.user);
        g_form.setValue('location', userGroup.user.location);
        g_form.setValue('work_notes', 'O usuário foi atribuído automaticamente com base no grupo selecionado.');
    }
}
