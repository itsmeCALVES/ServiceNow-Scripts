// Background Script - Remove as anotações de trabalho de incidentes fechados há mais de 6 meses
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes fechados há mais de 6 meses
gr.addEncodedQuery('state=7^closed_atRELATIVELE@month@ago@6');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Limpa o campo de anotações de trabalho (work_notes)
    gr.work_notes = '';
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Anotações de trabalho de incidentes fechados há mais de 6 meses foram limpas');
