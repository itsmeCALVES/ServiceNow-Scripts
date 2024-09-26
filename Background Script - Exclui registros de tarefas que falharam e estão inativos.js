// Background Script - Exclui registros de tarefas que falharam e estão inativos
// Cria um novo GlideRecord para a tabela 'task'
var gr = new GlideRecord('task');

// Adiciona uma query para selecionar tarefas com status "Falhou" e inativas
gr.addQuery('state', 'Falhou');
gr.addQuery('active', false);

// Executa a consulta
gr.query();

// Itera pelas tarefas retornadas
while (gr.next()) {
    // Exclui o registro da tarefa
    gr.deleteRecord();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Tarefas com falha e inativas foram excluídas');
