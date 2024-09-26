// Background Script - Enviar uma notificação para todos os usuários inativos
// Cria um novo registro GlideRecord para a tabela 'sys_user'
var gr = new GlideRecord('sys_user');
// Adiciona uma query para selecionar usuários com status 'inactive'
gr.addQuery('active', false);
// Executa a query
gr.query();

// Loop através de todos os registros encontrados
while (gr.next()) {
    // Envia uma notificação para o e-mail do usuário
    gs.eventQueue('user.inactive_notification', gr, gr.email);
    // Exibe uma mensagem para cada notificação enviada
    gs.print('Notificação enviada para: ' + gr.email);
}
