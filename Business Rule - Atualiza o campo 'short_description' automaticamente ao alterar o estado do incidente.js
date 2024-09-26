// Business Rule - Atualiza o campo 'short_description' automaticamente ao alterar o estado do incidente
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'In Progress') {
        current.short_description = 'Incidente em progresso: ' + current.number;
    }
})(current, previous);
