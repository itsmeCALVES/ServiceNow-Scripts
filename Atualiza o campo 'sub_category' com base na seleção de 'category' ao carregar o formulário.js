// Atualiza o campo 'sub_category' com base na seleção de 'category' ao carregar o formulário
// A lógica de negócios assume que cada categoria tem subcategorias específicas
function onLoad() {
  var category = g_form.getValue('category');
  if (category) {
      updateSubCategoryOptions(category);
  }
}

// Função auxiliar para atualizar as opções de 'sub_category'
function updateSubCategoryOptions(category) {
  if (category == 'Hardware') {
      g_form.clearOptions('sub_category');
      g_form.addOption('sub_category', 'Laptops', 'Laptops');
      g_form.addOption('sub_category', 'Desktops', 'Desktops');
  } else if (category == 'Software') {
      g_form.clearOptions('sub_category');
      g_form.addOption('sub_category', 'OS', 'Operating Systems');
      g_form.addOption('sub_category', 'Applications', 'Applications');
  }
}
