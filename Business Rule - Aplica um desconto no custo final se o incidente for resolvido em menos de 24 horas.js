// Business Rule - Aplica um desconto no custo final se o incidente for resolvido em menos de 24 horas
(function executeRule(current, previous /*null when async*/) {
    var createdAt = new GlideDateTime(current.sys_created_on);
    var resolvedAt = new GlideDateTime(current.sys_updated_on);

    var resolutionTime = gs.dateDiff(resolvedAt, createdAt, true);

    if (resolutionTime <= 1) {
        current.u_discount = '10%';
    }
})(current, previous);
