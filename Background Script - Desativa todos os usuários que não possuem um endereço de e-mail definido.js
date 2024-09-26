// Background Script - Desativa todos os usuários que não possuem um endereço de e-mail definido
// Cria um novo GlideRecord para a tabela 'sys_user'
var gr = new GlideRecord('sys_user');

// Adiciona uma query para selecionar usuários que não possuem e-mail
gr.addQuery('email', '');

// Executa a consulta
gr.query();

// Itera pelos usuários retornados
while (gr.next()) {
    // Define o status do usuário como inativo
    gr.active = false;
    
    // Atualiza o registro do usuário
    gr.update();
}

// Exibe uma mensagem informando que o script foi concluído
gs.print('Todos os usuários sem e-mail foram desativados');
