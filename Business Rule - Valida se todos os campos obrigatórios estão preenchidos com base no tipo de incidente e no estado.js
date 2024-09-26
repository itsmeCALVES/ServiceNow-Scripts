// Business Rule - Valida se todos os campos obrigatórios estão preenchidos com base no tipo de incidente e no estado
// Se um campo obrigatório estiver vazio, a Business Rule impede a transição do estado
(function onBefore(current, previous) {
    if (current.incident_type == 'Critical' && current.state == 'Resolved') {
        if (!current.resolution_notes || !current.root_cause) {
            gs.addErrorMessage('Os campos Resolução e Causa Raiz são obrigatórios para incidentes críticos.');
            current.setAbortAction(true);
        }
    }
})(current, previous);
