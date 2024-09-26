// Background Script - Reatribui todos os incidentes de um técnico que foi desativado
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes atribuídos a um técnico desativado
gr.addQuery('assigned_to', 'sys_id', '<sys_id_do_tecnico_desativado>');
gr.addQuery('state', '!=', '7'); // 7 = Fechado

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Atribui o incidente ao grupo padrão de suporte
    gr.assignment_group = 'Default Support Group';
    
    // Remove o técnico desativado da atribuição
    gr.assigned_to = '';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Todos os incidentes atribuídos ao técnico desativado foram reatribuídos');
