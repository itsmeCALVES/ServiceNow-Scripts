// Background Script - Atualiza a prioridade para "Alta" de todos os incidentes abertos
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar apenas incidentes abertos
gr.addQuery('state', '!=', '7'); // 7 = Fechado

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define a prioridade do incidente como '2' (Alta)
    gr.priority = '2';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Prioridade atualizada para todos os incidentes abertos');
