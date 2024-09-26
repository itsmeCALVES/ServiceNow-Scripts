// Background Script - Altera a prioridade para "3" de incidentes reabertos
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes reabertos
gr.addQuery('state', 'Reopened');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define a prioridade como "3" (Média)
    gr.priority = '3';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Prioridade dos incidentes reabertos alterada para "Média"');
