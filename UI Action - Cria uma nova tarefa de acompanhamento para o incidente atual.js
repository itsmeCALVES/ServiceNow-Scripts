// Esta UI Action cria uma nova tarefa de acompanhamento para o incidente atual
// A tarefa criada é relacionada ao incidente e atribuída ao grupo de suporte
var task = new GlideRecord('task');
task.initialize();
task.short_description = 'Acompanhamento do incidente: ' + current.number;
task.parent = current.sys_id;
task.assignment_group = current.assignment_group;
task.insert();
gs.addInfoMessage('Tarefa de acompanhamento criada com sucesso.');
