// Background Script - Exclui todos os incidentes fechados há mais de um ano
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes fechados há mais de um ano
gr.addEncodedQuery('closed_atRELATIVELE@year@ago@1');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Exclui o incidente
    gr.deleteRecord();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Incidentes fechados há mais de um ano foram excluídos');
