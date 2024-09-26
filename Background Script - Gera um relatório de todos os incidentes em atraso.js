// Background Script - Gera um relatório de todos os incidentes em atraso
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes cujo SLA foi violado
gr.addEncodedQuery('sla_due<javascript:gs.now()');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Imprime no log as informações do incidente em atraso
    gs.print('Incidente em atraso: ' + gr.number + ' - SLA vencido em: ' + gr.sla_due);
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Relatório de incidentes em atraso gerado com sucesso');
