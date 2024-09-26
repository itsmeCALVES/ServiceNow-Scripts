// Esta UI Action gera um relatório PDF do incidente e o envia por e-mail ao solicitante
var pdfDocument = new GlidePDFDocument();
pdfDocument.addField('Número do Incidente', current.number);
pdfDocument.addField('Descrição', current.short_description);
pdfDocument.addField('Status', current.state.getDisplayValue());
pdfDocument.generatePDF();
pdfDocument.sendToEmail(current.caller_id.email);
gs.addInfoMessage('O relatório PDF foi enviado para o e-mail do solicitante.');
