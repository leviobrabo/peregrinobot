const { UserModel, PlanoModel } = require("../database");

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
            text: "📖 Bíblia",
            switch_inline_query_current_chat: '',
          },
        ],
        [
          {
            text: "🙏 Pedidos de oração",
            url: "https://t.me/pedidosdeoracaoperegrino",
          },
          {
            text: "🪪 Minha conta",
            callback_data: "minha_conta",
          }
        ],
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

      const currentMessage = callbackQuery.message.text;
      if (currentMessage !== newCaption) {
        await bot.editMessageText(newCaption, {
          parse_mode: "HTML",
          chat_id: chatId,
          message_id: messageId,
          reply_markup: {
            inline_keyboard: [backToStartButton],
          },
        });
      }
    } else if (callbackQuery.data === "minha_conta") {
      const userId = callbackQuery.from.id;
      const user = await UserModel.findOne({ user_id: userId });
      const plano = await PlanoModel.findOne({ user_id: userId });
      const planoStatus = plano && plano.planoAtivo ? 'Ativo' : 'Inativo';
      const {
        firstname,
        user_id,
        diariavers,
        fowr_private,
        blb365,
        dia,
        versiculoUser,
        motivosdeoracao,
        horariodeoracao,
        blocodenotas,
        diasdeestudo,
        translation,
      } = user;

      const getUserRank = (daysActive) => {
        const ranks = [
          { rank: 'Iniciante', days: 0 },
          { rank: 'Servo', days: 7 },
          { rank: 'Fiel', days: 14 },
          { rank: 'Líder', days: 21 },
          { rank: 'Guerreiro', days: 30 },
          { rank: 'Levita', days: 60 },
          { rank: 'Rei', days: 90 },
          { rank: 'Pastor', days: 100 },
          { rank: 'Discípulo', days: 120 },
          { rank: 'Patriarca', days: 150 },
          { rank: 'Sacerdote', days: 180 },
          { rank: 'Evangelista', days: 210 },
          { rank: 'Bíblico', days: 240 },
          { rank: 'Peregrino', days: 270 },
          { rank: 'Missionário', days: 300 },
          { rank: 'Embaixador de Cristo', days: 400 },
          { rank: 'Expositor da Palavra', days: 500 },
          { rank: 'Conhecedor da Verdade', days: 800 },
          { rank: 'Remido de Deus', days: 900 },
          { rank: 'Vaso de Honra', days: 1000 },
          { rank: 'Teológo', days: 1500 },

        ];

        let userRank = 'Iniciante';

        for (let i = ranks.length - 1; i >= 0; i--) {
          if (daysActive >= ranks[i].days) {
            userRank = ranks[i].rank;
            break;
          }
        }

        return userRank;
      };

      const userRank = getUserRank(diasdeestudo);

      let statusMessage = `<b>Informações do usuário:</b>\n\n`;
      statusMessage += `<b>🪪 Nome:</b> <a href="tg://user?id=${user_id}">${firstname}</a>\n`;
      statusMessage += `<b>⏰ Recebe versos diários:</b> ${diariavers ? 'Sim' : 'Não'}\n`;
      statusMessage += `<b>🗂 Recebe informativos:</b> ${fowr_private ? 'Sim' : 'Não'}\n`;
      statusMessage += `<b>📆 Plano de 365 dias:</b> ${blb365 ? 'Ativo' : 'Desativado'}\n`;

      if (blb365) {
        statusMessage += `<b>📅 Dia:</b> <code>${dia}</code>/365\n`;
        statusMessage += `<b>📜Versículo:</b> <code>${versiculoUser}</code>/31105\n`;
      }

      statusMessage += `<b>🙏 Motivos de oração:</b> ${motivosdeoracao.length} motivos\n`;
      motivosdeoracao.forEach((motivo, index) => {
        statusMessage += `<b>         ${index + 1} -</b> ${motivo}\n`;
      });

      statusMessage += `<b>🔔 Alerta de oração:</b> ${horariodeoracao || 'Não definido'}\n`;

      statusMessage += `<b>📝 Anotações:</b> ${blocodenotas.length} anotações\n`;
      blocodenotas.forEach((anotacao, index) => {
        statusMessage += `<b>         ${index + 1} -</b> ${anotacao}\n`;
      });
      if (plano && plano.plano1) {
        statusMessage += `<b>📖 Plano:</b> Transformado\n`;
      }

      if (plano && plano.plano2) {
        statusMessage += `<b>📖 Plano:</b> Sabedoria Divina\n`;
      }
      if (plano && plano.planosConcluidos) {
        statusMessage += `<b>✅ Plano Concluídos:</b> ${plano && plano.planosConcluidos ? plano.planosConcluidos : 0} planos\n`;
      }
      statusMessage += `<b>⚡️ Atividade no bot:</b> ${diasdeestudo} dias\n`;
      statusMessage += `<b>📈 Rank:</b> ${userRank}\n`;
      statusMessage += `<b>🖌 Tradução:</b> ${translation.toUpperCase()}`;

      await bot.editMessageText(statusMessage, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_start",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "back_to_start") {
      await bot.editMessageText(msgstart, {
        parse_mode: "HTML",
        chat_id: chatId,
        message_id: messageId,
        disable_web_page_preview: true,
        reply_markup: options_start.reply_markup,
      });
    }
  });

  bot.sendMessage(message.chat.id, msgstart, options_start);
}

module.exports = {
  startCommand,
};
