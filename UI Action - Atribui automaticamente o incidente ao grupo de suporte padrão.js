// Esta UI Action atribui automaticamente o incidente ao grupo de suporte padrão
// Usa uma constante para definir o grupo de suporte padrão
var defaultGroup = 'IT Support Group';
current.assignment_group = defaultGroup;
current.update();
gs.addInfoMessage('O incidente foi atribuído ao grupo de suporte padrão: ' + defaultGroup);
