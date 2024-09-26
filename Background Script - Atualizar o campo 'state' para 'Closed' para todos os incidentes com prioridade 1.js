// Background Script - Cria um novo registro GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');
// Adiciona uma query para selecionar incidentes com prioridade 1
gr.addQuery('priority', 1);
// Executa a query
gr.query();

// Loop através de todos os registros encontrados
while (gr.next()) {
    // Atualiza o campo 'state' para 'Closed'
    gr.state = 'Closed';
    // Salva as alterações no banco de dados
    gr.update();
    // Exibe uma mensagem para cada incidente atualizado
    gs.print('Incidente fechado: ' + gr.number);
}
