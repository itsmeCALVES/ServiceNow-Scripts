// Background Script - Atualiza o status de ativos inativos para "Disponível"
// Cria um novo GlideRecord para a tabela 'cmdb_ci'
var gr = new GlideRecord('cmdb_ci');

// Adiciona uma query para selecionar ativos com status "Inativo"
gr.addQuery('status', 'Inativo');

// Executa a consulta
gr.query();

// Itera pelos ativos retornados
while (gr.next()) {
    // Define o status como "Disponível"
    gr.status = 'Disponível';
    
    // Atualiza o ativo
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Status de todos os ativos inativos atualizados para "Disponível"');
