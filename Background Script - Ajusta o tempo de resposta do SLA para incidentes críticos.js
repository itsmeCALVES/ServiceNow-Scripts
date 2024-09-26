// Background Script - Ajusta o tempo de resposta do SLA para incidentes críticos
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes com prioridade crítica (1)
gr.addQuery('priority', '1');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define o campo 'sla_due' para 1 hora a partir do momento atual
    gr.sla_due = gs.minutesAgoStart(-60);
    
    // Atualiza o incidente no banco de dados
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Tempo de resposta do SLA ajustado para incidentes críticos');
