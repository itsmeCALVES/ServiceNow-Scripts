// Background Script - Exclui registros duplicados de incidentes com o mesmo número
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes duplicados com base no número
gr.addAggregate('count', 'number');
gr.addHaving('count', '>', '1');
gr.query();

// Itera pelos registros duplicados
while (gr.next()) {
    // Exclui o incidente duplicado
    gr.deleteRecord();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Registros duplicados de incidentes foram corrigidos');
