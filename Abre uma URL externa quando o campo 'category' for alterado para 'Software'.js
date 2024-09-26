// Abre uma URL externa quando o campo 'category' for alterado para 'Software'
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == 'Software') {
        window.open('https://www.software-support.com');
    }
}
