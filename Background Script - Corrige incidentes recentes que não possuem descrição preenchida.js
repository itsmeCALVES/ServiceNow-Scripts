// Background Script - Corrige incidentes recentes que não possuem descrição preenchida
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Adiciona uma query para selecionar incidentes criados nos últimos 30 dias e com a descrição vazia
gr.addEncodedQuery('sys_created_onRELATIVEGE@dayofquarter@ago@30^short_descriptionISEMPTY');

// Executa a consulta
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define uma descrição padrão para incidentes sem descrição
    gr.short_description = 'Descrição não fornecida';
    
    // Atualiza o incidente no banco de dados
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Incidentes sem descrição corrigidos com uma descrição padrão');
