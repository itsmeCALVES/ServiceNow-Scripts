// client script para deixar campo short description obrgatorio se o campo category for preenchido

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var category = g_form.getValue('category');
    var short_description = g_form.getValue('short_description');
    if (category != '')
    {
            g_form.setMandatory('short_description', true);
        }
    }