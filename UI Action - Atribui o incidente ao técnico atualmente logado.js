// Esta UI Action atribui o incidente ao técnico atualmente logado
// Isso facilita a auto-atribuição de tickets em casos de suporte urgente
current.assigned_to = gs.getUserID();
current.update();
gs.addInfoMessage('O incidente foi atribuído ao usuário logado.');
