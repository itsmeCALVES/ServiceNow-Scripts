// Client Script - Altera a cor do campo 'priority' para vermelho se o valor for '1' (Urgent)
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == '1') {
        g_form.setFieldStyle('priority', 'color', 'red');
    }
}
