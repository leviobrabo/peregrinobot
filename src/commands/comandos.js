function comandosCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }
  const chatId = message.chat.id;
  const commands = [
    { command: '/traducao', description: 'Escolhe a tradução preferida' },
    { command: '/infotradu', description: 'Informações sobre as traduções disponíveis' },
    { command: '/stats', description: 'Envia as estatísticas do bot (N° de usuários e grupos)' },
    { command: '/ping', description: 'Envia a latência do bot' },
    { command: '/intercessao', description: 'Envia sua intercessão' },
    { command: '/start', description: 'Mensagem inicial do bot' },
    { command: '/help', description: 'Ajuda do bot' },
    { command: '/fwdon', description: 'Não receber encaminhamento no grupo' },
    { command: '/fwdoff', description: 'Receber encaminhamento no grupo' },
    { command: '/versoff', description: 'Não receber versículos bíblicos (padrão)' },
    { command: '/verson', description: 'Receber versículos bíblicos' },
    { command: '/livros', description: 'Como fazer a pesquisa inline do bot' },
    { command: '/plano', description: 'Lista de planos disponíveis' },
    { command: '/dia', description: 'Como funciona a contagem de dias ativos no bot' },
    { command: '/planobiblico', description: 'Plano bíblico 365 dias' },
    { command: '/oracao', description: 'Lista de orações escolhidas' },
    { command: '/addmotivo', description: 'Adiciona motivo de oração' },
    { command: '/delmotivo', description: 'Remove motivo de oração' },
    { command: '/horariooracao', description: 'Adicionar um lembrete de orar' },
    { command: '/delhorario', description: 'Remove o lembrete' },
    { command: '/ajudaoracao', description: 'Como usar os comandos de oração' },
    { command: '/anotacao', description: 'Lista de anotações' },
    { command: '/addanotacao', description: 'Adiciona uma anotação' },
    { command: '/delanotacao', description: 'Remove uma anotação' },
    { command: '/ajudaanotacao', description: 'Como usar os comandos de anotação' },
    { command: '/status', description: 'Ver os status no bot' },
    { command: '/planotransformado', description: 'Plano transformado' },
    { command: '/planosabedoriadvn', description: 'Plano sabedoria Divina' },
    { command: '/planont', description: 'Plano Novo Testamento' },
    { command: '/planoop', description: 'Plano Orações perigosas' },
    { command: '/planobibliatd', description: 'Plano Bíblia para Todos' },
    { command: '/planocsr', description: 'Plano Casamento restaurado' },
    { command: '/planolinguagemdoamor', description: 'Plano linguagem do amor' },
    { command: '/planonamoroctmp', description: 'Plano Namoro na era contemporânea' },
    { command: '/planoapocalipse', description: 'Plano de áudio Apocalipse' },
    { command: '/planonamoropb', description: 'Plano Namoro "Preto no Branco": Limites, Sexo e Realidade' },
    { command: '/planocasamento', description: 'Plano Curso do Casamento' },
    { command: '/planodvc', description: 'Plano Do Divórcio à Cura' },
    { command: '/verstema', description: 'Escolher entre Adoração, Amor, Consolo, Encorajamento, Fé' },
    { command: '/topdias', description: 'Ranking de dias ativos' },
    { command: '/topplanos', description: 'Ranking de planos concluídos' }
  ];

  let response = 'Comandos disponíveis:\n\n';
  commands.forEach((cmd) => {
    response += `${cmd.command} - ${cmd.description}\n`;
  });

  bot.sendMessage(chatId, response);
}

module.exports = {
  comandosCommand,
};
