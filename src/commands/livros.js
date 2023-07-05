function livrosCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }
  const msglivros = `<b>Sobre o sistema de pesquisar da Bíblia inline<b>\n\nVocê pode pesquisar um livro bíblico de duas formas: Nome ou abreviação.\n\nO nome é autoexplicativo, por exemplo: "Mateus, Lucas, Êxodo, Números..."\n\nJá as abreviações são definidas assim: ['gn','ex','lv','nm','dt','js','jz','rt','1sm','2sm','1rs','2rs','1cr','2cr','ed','ne','et','job','sl','pv','ec','ct','is','jr','lm','ez','dn','os','jl','am','ob','jn','mq','na','hc','sf','ag','zc','ml','mt','mc','lc','jo','at','rm','1co','2co','gl','ef','fp','cl','1ts','2ts','1tm','2tm','tt','fm','hb','tg','1pe','2pe','1jo','2jo','3jo','jd','ap']\n\nEntão basta digitar <code>@operegrino_bot 1cr 2:3</code> ou <code>@operegrino_bot Hebreus 2</code>\n\nVale ressaltar que, às vezes, os textos podem sem grandes demais para a consulta inline, por isso, não serão enviados!\n\n<a href="https://teletype.in/@ansmsgbot/biblia-inline">Saiba mais</a>`;
  bot.sendMessage(message.chat.id, msglivros, { parse_mode: "HTML" });
}
module.exports = {
  livrosCommand,
};
