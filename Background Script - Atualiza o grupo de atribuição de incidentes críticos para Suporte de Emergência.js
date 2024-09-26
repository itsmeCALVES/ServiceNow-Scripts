// Background Script - Atualiza o grupo de atribuição de incidentes críticos para "Suporte de Emergência"
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes com prioridade '1' (Crítico)
gr.addQuery('priority', '1');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define o grupo de atribuição como "Suporte de Emergência"
    gr.assignment_group = 'Suporte de Emergência';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Grupo de atribuição de todos os incidentes críticos atualizado para "Suporte de Emergência"');
