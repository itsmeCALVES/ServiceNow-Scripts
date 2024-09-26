// Background Script - Arquiva todos os incidentes fechados há mais de 2 anos
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes fechados há mais de dois anos
gr.addEncodedQuery('closed_atRELATIVELE@year@ago@2');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Move o incidente para uma tabela de arquivamento
    gr.setTableName('incident_archive');
    gr.insert();
    
    // Exclui o incidente da tabela principal
    gr.deleteRecord();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Incidentes fechados há mais de 2 anos foram arquivados');
