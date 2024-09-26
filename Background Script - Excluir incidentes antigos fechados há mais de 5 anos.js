// Background Script - Excluir incidentes antigos fechados há mais de 5 anos
// Cria um novo registro GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');
// Adiciona uma query para selecionar incidentes fechados há mais de 5 anos
gr.addQuery('state', 'Closed');
gr.addQuery('closed_at', '<=', gs.daysAgo(5 * 365));
// Executa a query
gr.query();

// Loop através de todos os registros encontrados
while (gr.next()) {
    // Exclui o incidente encontrado
    gr.deleteRecord();
    // Exibe uma mensagem para cada incidente excluído
    gs.print('Incidente excluído: ' + gr.number);
}
