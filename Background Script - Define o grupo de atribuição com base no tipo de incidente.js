// Background Script - Define o grupo de atribuição com base no tipo de incidente
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Executa a consulta para selecionar todos os incidentes
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Define o grupo de suporte com base no tipo de incidente
    if (gr.incident_type == 'Hardware') {
        gr.assignment_group = 'Hardware Support Group';
    } else if (gr.incident_type == 'Software') {
        gr.assignment_group = 'Software Support Group';
    }
    
    // Atualiza o incidente
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Grupo de atribuição definido com base no tipo de incidente');
