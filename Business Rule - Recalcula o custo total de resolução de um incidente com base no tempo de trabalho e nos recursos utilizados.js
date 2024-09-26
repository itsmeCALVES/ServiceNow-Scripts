// Business Rule - Recalcula o custo total de resolução de um incidente com base no tempo de trabalho e nos recursos utilizados
// Isso fornece uma visão detalhada do custo operacional do incidente
(function executeRule(current, previous /*null when async*/) {
    var totalCost = 0;

    // Calcula o custo de trabalho
    var workTime = gs.dateDiff(current.work_end, current.work_start, true);
    totalCost += workTime * 50; // 50 unidades por hora de trabalho

    // Calcula o custo de recursos (ex: peças de hardware)
    var resources = new GlideRecord('incident_resources');
    resources.addQuery('incident', current.sys_id);
    resources.query();

    while (resources.next()) {
        totalCost += resources.cost;
    }

    current.total_cost = totalCost;
})(current, previous);
