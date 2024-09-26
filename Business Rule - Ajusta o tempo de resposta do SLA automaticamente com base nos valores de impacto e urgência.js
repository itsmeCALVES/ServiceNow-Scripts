// Business Rule - Ajusta o tempo de resposta do SLA automaticamente com base nos valores de impacto e urgência
// Se o impacto e a urgência forem altos, reduz o tempo de resposta do SLA
(function executeRule(current, previous /*null when async*/) {
    if (current.impact == 'High' && current.urgency == 'High') {
        current.sla_due = gs.minutesAgoStart(60); // Define o SLA para 1 hora
    } else if (current.impact == 'Low' && current.urgency == 'Low') {
        current.sla_due = gs.daysAgoStart(5); // Define o SLA para 5 dias úteis
    }
})(current, previous);
