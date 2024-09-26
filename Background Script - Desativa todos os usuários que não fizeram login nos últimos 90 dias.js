// Background Script - Desativa todos os usuários que não fizeram login nos últimos 90 dias
// Cria um novo GlideRecord para a tabela 'sys_user'
var gr = new GlideRecord('sys_user');

// Adiciona uma query para selecionar usuários que não fizeram login nos últimos 90 dias
gr.addEncodedQuery('last_login_timeRELATIVELE@dayofquarter@ago@90');

// Executa a consulta
gr.query();

// Itera pelos usuários retornados
while (gr.next()) {
    // Define o status do usuário como inativo
    gr.active = false;
    
    // Atualiza o registro do usuário
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Todos os usuários inativos por mais de 90 dias foram desativados');
