// Background Script - Reativa todos os usuários desativados nos últimos 30 dias
// Cria um novo GlideRecord para a tabela 'sys_user'
var gr = new GlideRecord('sys_user');

// Adiciona uma query para selecionar usuários desativados nos últimos 30 dias
gr.addEncodedQuery('active=false^sys_updated_onRELATIVEGE@dayofquarter@ago@30');

// Executa a consulta
gr.query();

// Itera pelos usuários retornados
while (gr.next()) {
    // Define o status do usuário como ativo
    gr.active = true;
    
    // Atualiza o registro do usuário
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Todos os usuários desativados no último mês foram reativados');
