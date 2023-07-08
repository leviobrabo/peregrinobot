function startCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }
  const firstName = message.from.first_name;
  const PhotoStart = 'src/image/start.png';
  const owner = process.env.ownerId

  const msgstart = `Olá, <b>${firstName}</b>! \n\nEu sou o bot <b>Peregrino</b>, sou um bot bíblico que está aqui para propagar o evangelho de Deus, e ajudá-los nos estudos diários da bíblia.\n\nAdicione-me em seu grupo para receber as mensagens bíblicas.\n\n<b>Funções:</b> /help <b>[COMECE POR AQUI]</b>\n\n📦<b>Meu código-fonte:</b> <a href="https://github.com/leviobrabo/Peregrino">GitHub</a>`;
  const options_start = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✨ Adicione-me em seu grupo",
            url: "https://t.me/operegrino_bot?startgroup=true",
          },
        ],
        [
          {
            text: "⚙️ Atualizações do bot",
            url: "https://t.me/peregrinochannel",
          },
          {
            text: "💡 Sobre",
            callback_data: "edit_caption",
          },
        ],
        [
          {
            text: "📍 Canal Oficial",
            url: "https://t.me/peregrinosbr",
          },
        ],
      ],
    },
  };

  bot.on("callback_query", async (callbackQuery) => {
    if (callbackQuery.message.chat.type !== "private") {
      return;
    }
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (callbackQuery.data === "edit_caption") {
      const newCaption = `<b>SOBRE O BOT</b>\n\nEste bot foi inspirado na <a href="https://www.bible.com/pt">Bíblia YourVersion</a> e tem como objetivo principal propagar a palavra de Deus e auxiliar no estudo das escrituras sagradas. O bot oferece acesso fácil a 14 diferentes traduções bíblicas. (/infotradu)\n\nCom um acervo variado, os usuários podem escolher a versão preferida para leitura e estudo, atendendo às suas necessidades individuais de compreensão e interpretação das Escrituras. Essa diversidade de traduções proporciona uma experiência enriquecedora e abrangente.\n\nAlém das traduções, o bot disponibiliza recursos complementares, como planos bíblicos e versículos bíblicos diários\n\n<i>Agradeço sinceramente a <a href="https://t.me/peterinvest">Peter</a> pelo apoio e orientação durante o desenvolvimento deste bot.</i>\n\nQue este bot seja uma ferramenta valiosa e inspiradora para todos que buscam se conectar com a Palavra de Deus e fortalecer sua espiritualidade.`;

      const backToStartButton = [
        {
          text: "↩️ Voltar",
          callback_data: "back_to_start",
        },
        {
          text: "👤 Suporte",
          url: `tg://user?id=${owner}`,
        },
      ];

      await bot.editMessageText(newCaption, {
        parse_mode: "HTML",
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [backToStartButton],
        },
      });
    } else if (callbackQuery.data === "back_to_start") {
      await bot.editMessageText(caption, {
        parse_mode: "HTML",
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options_start.reply_markup,
      });
    }
  });

  bot.sendMessage(message.chat.id, msgstart, options_start);
}

module.exports = {
  startCommand,
};
