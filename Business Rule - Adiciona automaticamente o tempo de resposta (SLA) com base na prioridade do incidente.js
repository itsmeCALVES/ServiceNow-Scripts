// Business Rule - Adiciona automaticamente o tempo de resposta (SLA) com base na prioridade do incidente
(function executeRule(current, previous /*null when async*/) {
    if (current.priority == '1') {
        current.response_due = gs.daysAgoStart(1); // Tempo de resposta de 1 dia para prioridade 1
    } else if (current.priority == '2') {
        current.response_due = gs.daysAgoStart(3); // Tempo de resposta de 3 dias para prioridade 2
    }
})(current, previous);
