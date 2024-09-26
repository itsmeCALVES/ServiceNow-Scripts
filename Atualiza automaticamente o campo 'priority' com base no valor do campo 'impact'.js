// Atualiza automaticamente o campo 'priority' com base no valor do campo 'impact'
// Se o impacto for 'High', a prioridade será definida como '1' (Urgente)
(function executeRule(current, previous /*null when async*/) {
    if (current.impact == 'High') {
        current.priority = '1'; // Urgente
    }
})(current, previous);
