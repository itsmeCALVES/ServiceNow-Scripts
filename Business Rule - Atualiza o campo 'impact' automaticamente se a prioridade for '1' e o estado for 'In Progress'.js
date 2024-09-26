//Business Rule - Atualiza o campo 'impact' automaticamente se a prioridade for '1' e o estado for 'In Progress'
// Isso garante que incidentes críticos em andamento tenham um impacto definido corretamente
(function executeRule(current, previous /*null when async*/) {
    if (current.priority == '1' && current.state == 'In Progress') {
        current.impact = 'High';
    }
})(current, previous);
