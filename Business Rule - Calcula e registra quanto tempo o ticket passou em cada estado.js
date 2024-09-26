// Business Rule - Calcula e registra quanto tempo o ticket passou em cada estado
// Isso permite um acompanhamento detalhado do ciclo de vida do incidente
(function executeRule(current, previous /*null when async*/) {
    if (!previous.state.nil()) {
        var duration = gs.dateDiff(current.sys_updated_on, previous.sys_updated_on, true);
        gs.addInfoMessage('O ticket passou ' + duration + ' horas no estado ' + previous.state.getDisplayValue());
    }
})(current, previous);
