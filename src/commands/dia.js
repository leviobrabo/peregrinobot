function diaCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }
  const text = `<b>Sobre o sistema de perseverança </b>\n\nQualquer interação feita com bom iria registrar no mais um dia no banco de dados, e todos os dias às 23h30min irá enviar uma mensagem confirmando se você ganhou ou não, caso você não ganhe, o sistema restará seus dias de uso para 1°\n\nAlém disso, possuímos um sistema de níveis:\n\n1° dia - Iniciante\n7° dia - Servo\n14° dia Fiel\n21° dia - Líder\n30° dia - Guerreiro\n60° dia - Levita\n90° dia - Rei\n...\n\nLembrando que isso somente tem um caráter ilustrativo e divertido para manter os dias de estudos.`;
  bot.sendMessage(message.chat.id, text, { parse_mode: "HTML" });
}

module.exports = {
  diaCommand,
};
