// Business Rule - Atualiza automaticamente o registro de inventário quando um incidente relacionado a hardware é fechado
// Isso garante que o status dos itens de hardware seja mantido atualizado após a resolução do incidente
(function executeRule(current, previous /*null when async*/) {
    if (current.category == 'Hardware' && current.state == 'Closed') {
        var hardware = new GlideRecord('cmdb_ci_hardware');
        hardware.addQuery('sys_id', current.cmdb_ci);
        hardware.query();

        if (hardware.next()) {
            hardware.status = 'In Use';
            hardware.update();
        }
    }
})(current, previous);
