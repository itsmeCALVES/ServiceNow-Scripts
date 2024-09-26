// Define o campo 'impact' como obrigatório apenas quando o tipo de incidente é 'Severe' ou 'Critical'
// Isso impede que incidentes menos graves exijam informações desnecessárias
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    
    var incidentType = g_form.getValue('incident_type');
    if (incidentType == 'Severe' || incidentType == 'Critical') {
        g_form.setMandatory('impact', true);
    } else {
        g_form.setMandatory('impact', false);
    }
}
