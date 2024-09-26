// Business Rule - Define o campo 'assigned_to' automaticamente com base no grupo de atribuição
(function executeRule(current, previous /*null when async*/) {
    if (current.assignment_group == 'Hardware Support') {
        current.assigned_to = 'tech_support_user';
    }
})(current, previous);
