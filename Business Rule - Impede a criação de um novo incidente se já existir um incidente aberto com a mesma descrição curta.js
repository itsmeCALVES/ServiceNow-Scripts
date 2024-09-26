// Business Rule - Impede a criação de um novo incidente se já existir um incidente aberto com a mesma descrição curta
(function onBefore(current, previous) {
  var gr = new GlideRecord('incident');
  gr.addQuery('short_description', current.short_description);
  gr.addQuery('state', '!=', 'Closed'); // Verifica se há incidentes abertos
  gr.query();

  if (gr.next()) {
      gs.addErrorMessage('Já existe um incidente aberto com esta descrição.');
      current.setAbortAction(true);
  }
})(current, previous);


