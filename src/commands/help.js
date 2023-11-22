function helpCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }
  const firstName = message.from.first_name;
  const owner = process.env.ownerId

  const text =
    `<b>Olá! ${firstName}</b>\n\nEu sou um bot com o objetivo de propagar o evangelho pelo Telegram. Estou aqui para ajudá-lo em sua jornada espiritual e proporcionar uma experiência enriquecedora com recursos e comandos relacionados à Palavra de Deus. Fique à vontade para explorar as opções abaixo e descobrir tudo o que posso oferecer:\n\n<b>Funções disponíveis:</b>\n\n- Plano de leitura bíblica em 365 dias (18h)\n- Planos diversos(21h30min)\n- Adicione seus motivos de oração e crie lembretes\n- Adicione anotações bíblicas e reveja\n- Tenha um monitoramento de dias de estudo bíblico\n- Envio de versículos diários e versículos com tema para grupos\n- Pesquisa da Bíblia inline\n- Escolha a sua tradução preferida\n- Pedidos de intercessões`;
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📌 Lista de funções",
            callback_data: "commands",
          },
        ],
        [
          { text: "🚧 Projetos", url: "https://t.me/pjtlbrabo" },
          {
            text: "👤 Suporte", url: `https://t.me/kylorensbot`,
          },
        ],
        [
          {
            text: "💰 Faça uma contribuição",
            callback_data: "donate",
          }
        ]
      ],
    },
  };

  bot.sendMessage(message.chat.id, text, options);
}

module.exports = {
  helpCommand,
};
