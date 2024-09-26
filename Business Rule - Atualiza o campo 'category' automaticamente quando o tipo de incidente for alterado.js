// Business Rule - Atualiza o campo 'category' automaticamente quando o tipo de incidente for alterado
(function executeRule(current, previous /*null when async*/) {
  if (current.incident_type == 'Hardware') {
      current.category = 'Hardware Issues';
  } else if (current.incident_type == 'Software') {
      current.category = 'Software Issues';
  }
})(current, previous);
