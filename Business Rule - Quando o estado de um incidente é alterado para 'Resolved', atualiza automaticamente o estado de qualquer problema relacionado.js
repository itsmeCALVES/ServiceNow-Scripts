// Business Rule - Quando o estado de um incidente é alterado para 'Resolved', atualiza automaticamente o estado de qualquer problema relacionado
// Isso garante que os problemas relacionados reflitam a resolução do incidente principal
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'Resolved' && previous.state != 'Resolved') {
        var problem = new GlideRecord('problem');
        problem.addQuery('related_incidents', current.sys_id);
        problem.query();

        while (problem.next()) {
            problem.state = 'Resolved';
            problem.update();
        }
    }
})(current, previous);
