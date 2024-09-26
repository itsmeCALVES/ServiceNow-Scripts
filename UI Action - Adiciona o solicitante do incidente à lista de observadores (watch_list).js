// Esta UI Action adiciona o solicitante do incidente à lista de observadores (watch_list)
// Garante que o solicitante receberá atualizações sobre o incidente
if (!current.watch_list.includes(current.caller_id)) {
    current.watch_list.add(current.caller_id);
    current.update();
    gs.addInfoMessage('O solicitante foi adicionado à lista de observadores.');
} else {
    gs.addErrorMessage('O solicitante já está na lista de observadores.');
}
