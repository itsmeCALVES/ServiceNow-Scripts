// Business Rule - Registra a data e hora de resolução quando o estado for alterado para 'Resolved'
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved') {
        current.u_resolution_time = new GlideDateTime();
    }
})(current, previous);
