// Business Rule - Quando um incidente é atribuído a um técnico, o técnico é adicionado automaticamente à lista de observadores (watch_list)
(function executeRule(current, previous /*null when async*/) {
    if (current.assigned_to && !current.watch_list.includes(current.assigned_to)) {
        current.watch_list.add(current.assigned_to);
    }
})(current, previous);
