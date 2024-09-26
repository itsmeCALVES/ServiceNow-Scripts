// Business Rule - Quando o incidente é criado, o solicitante é adicionado automaticamente à watch_list
// Isso permite que o solicitante acompanhe atualizações do incidente
(function executeRule(current, previous /*null when async*/) {
    if (current.caller_id && !current.watch_list.includes(current.caller_id)) {
        current.watch_list.add(current.caller_id);
    }
})(current, previous);
