// A linha 1.x mantém a interface legada, mas exporta TelegramBot como propriedade.
const { TelegramBot } = require("node-telegram-bot-api");

exports.bot = new TelegramBot(process.env.TELEGRAM_API, { polling: true });
