// Background Script - Definir o campo 'category' como 'Software' para todos os incidentes abertos
var gr = new GlideRecord('incident');
// Adiciona uma query para selecionar incidentes com o estado 'Open'
gr.addQuery('state', 'Open');
// Executa a query
gr.query();

// Loop através de todos os registros encontrados
while (gr.next()) {
    // Atualiza o campo 'category' para 'Software'
    gr.category = 'Software';
    // Salva as alterações no banco de dados
   
