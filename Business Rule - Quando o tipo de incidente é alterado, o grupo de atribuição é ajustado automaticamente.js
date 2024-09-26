// Business Rule - Quando o tipo de incidente é alterado, o grupo de atribuição é ajustado automaticamente
// Isso facilita a redistribuição de incidentes entre diferentes equipes de suporte
(function executeRule(current, previous /*null when async*/) {
    if (current.incident_type == 'Network') {
        current.assignment_group = 'Network Support Group';
    } else if (current.incident_type == 'Software') {
        current.assignment_group = 'Software Support Group';
    }
})(current, previous);
