// Business Rule - Impede que o campo 'priority' seja alterado por usuários que não tenham a função de administrador
(function onBefore(current, previous) {
    if (!gs.hasRole('admin') && current.priority != previous.priority) {
        gs.addErrorMessage('Somente administradores podem alterar a prioridade.');
        current.setAbortAction(true);
    }
})(current, previous);
