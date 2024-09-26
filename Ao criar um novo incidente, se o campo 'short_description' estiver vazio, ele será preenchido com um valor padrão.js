// Ao criar um novo incidente, se o campo 'short_description' estiver vazio, ele será preenchido com um valor padrão
(function executeRule(current, previous /*null when async*/) {
    if (!current.short_description) {
        current.short_description = 'Novo incidente criado, sem descrição fornecida';
    }
})(current, previous);
