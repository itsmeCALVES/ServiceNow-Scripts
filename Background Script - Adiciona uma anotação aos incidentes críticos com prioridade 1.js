// Background Script - Adiciona uma anotação aos incidentes críticos com prioridade 1
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes com prioridade '1' (Crítica)
gr.addQuery('priority', '1');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Adiciona uma anotação no campo 'work_notes' destacando a criticidade
    gr.work_notes = 'Incidente crítico com prioridade alta. Ação imediata necessária.';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Anotações adicionadas para todos os incidentes críticos');
