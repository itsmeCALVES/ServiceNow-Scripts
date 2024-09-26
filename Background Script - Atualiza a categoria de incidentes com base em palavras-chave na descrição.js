// Background Script - Atualiza a categoria de incidentes com base em palavras-chave na descrição
// Cria um novo GlideRecord para a tabela 'incident'
var gr = new GlideRecord('incident');

// Executa a consulta para selecionar todos os incidentes
gr.query();

// Itera pelos incidentes retornados
while (gr.next()) {
    // Verifica se a descrição contém a palavra "rede"
    if (gr.short_description.indexOf('rede') > -1) {
        // Define a categoria como "Rede"
        gr.category = 'Network';
        gr.update();
    }
    // Verifica se a descrição contém a palavra "software"
    else if (gr.short_description.indexOf('software') > -1) {
        // Define a categoria como "Software"
        gr.category = 'Software';
        gr.update();
    }
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Categorias de incidentes atualizadas com base na descrição');
