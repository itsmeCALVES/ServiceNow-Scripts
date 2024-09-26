// Business Rule - Calcula a penalidade de SLA para incidentes resolvidos após o tempo limite e aplica um valor de multa
// Isso garante que incidentes que excedem o SLA tenham penalidades aplicadas corretamente
(function executeRule(current, previous /*null when async*/) {
    var slaDueDate = new GlideDateTime(current.sla_due);
    var resolvedDate = new GlideDateTime(current.resolved_at);
    
    if (resolvedDate > slaDueDate) {
        var penalty = gs.dateDiff(resolvedDate, slaDueDate, true) * 100; // Penalidade de 100 unidades por hora de atraso
        current.sla_penalty = penalty;
    }
})(current, previous);
