// Business Rule - Ajusta a data de vencimento de um incidente automaticamente com base no impacto e no SLA
(function executeRule(current, previous /*null when async*/) {
    if (current.impact == 'High') {
        current.due_date = gs.daysAgoStart(2); // Definir a data de vencimento para 2 dias úteis
    } else if (current.impact == 'Low') {
        current.due_date = gs.daysAgoStart(5); // 5 dias úteis para impacto baixo
    }
})(current, previous);
