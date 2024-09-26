// Business Rule - Impede que incidentes fechados há mais de 30 dias sejam reabertos
(function onBefore(current, previous) {
    var closedDate = new GlideDateTime(current.closed_at);
    var daysPassed = gs.dateDiff(gs.nowDateTime(), closedDate, true);
    
    if (daysPassed > 30 && current.state == 'Reopened') {
        gs.addErrorMessage('Incidentes fechados há mais de 30 dias não podem ser reabertos.');
        current.setAbortAction(true);
    }
})(current, previous);
