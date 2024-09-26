// Client Script - Preenche os campos de 'email' e 'telefone' do solicitante ao alterar o campo 'caller_id'
// Isso melhora a experiência do usuário ao evitar preenchimento manual de campos repetitivos
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    
    // Busca os dados do usuário no banco de dados
    var user = new GlideRecord('sys_user');
    if (user.get(newValue)) {
        g_form.setValue('u_contact_email', user.email);
        g_form.setValue('u_contact_phone', user.phone);
    }
}
