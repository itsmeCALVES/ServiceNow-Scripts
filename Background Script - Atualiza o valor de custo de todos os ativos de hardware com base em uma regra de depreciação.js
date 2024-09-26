// Background Script - Atualiza o valor de custo de todos os ativos de hardware com base em uma regra de depreciação
// Cria um novo GlideRecord para a tabela 'cmdb_ci_hardware'
var gr = new GlideRecord('cmdb_ci_hardware');

// Executa a consulta para selecionar todos os ativos de hardware
gr.query();

// Itera pelos ativos retornados
while (gr.next()) {
    // Aplica uma depreciação de 5% ao valor de custo original
    gr.cost = gr.cost * 0.95;
    
    // Atualiza o ativo no banco de dados
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Valor de custo atualizado para todos os ativos de hardware');
