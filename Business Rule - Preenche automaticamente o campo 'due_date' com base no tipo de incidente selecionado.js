// Business Rule - Preenche automaticamente o campo 'due_date' com base no tipo de incidente selecionado
(function executeRule(current, previous /*null when async*/) {
    if (current.incident_type == 'Standard') {
        current.due_date = gs.daysAgoStart(5); // 5 dias úteis para incidentes padrão
    }
})(current, previous);

