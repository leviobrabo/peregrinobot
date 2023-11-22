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


  bot.sendMessage(message.chat.id, msgstart, options_start);
}

module.exports = {
  startCommand,
};
