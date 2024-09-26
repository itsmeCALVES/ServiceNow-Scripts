// Client Script - Impede a submissão do formulário se a data de vencimento cair em um feriado ou final de semana
// Utiliza uma API customizada para validar feriados e verificar se a data é válida
function onSubmit() {
    var dueDate = new Date(g_form.getValue('due_date'));
    
    // Função para verificar feriados (supõe que 'isHoliday' seja uma API personalizada)
    if (isWeekend(dueDate) || isHoliday(dueDate)) {
        g_form.addErrorMessage('A data de vencimento não pode cair em um final de semana ou feriado.');
        return false;
    }
    return true;
}

// Função auxiliar para verificar se a data cai em um final de semana
function isWeekend(date) {
    var day = date.getDay();
    return (day === 0 || day === 6); // 0 = Domingo, 6 = Sábado
}
