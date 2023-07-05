function infotraduCommand(bot, message) {
  if (message.chat.type !== "private") {
    return;
  }

  const traducoes = [
    { sigla: "AA", nome: "Almeida Atualizada", descricao: "Uma das traduções mais antigas e amplamente utilizadas em português." },
    { sigla: "ACF", nome: "Almeida Corrigida Fiel", descricao: "Uma tradução fiel e precisa do texto original em hebraico, aramaico e grego." },
    { sigla: "ARA", nome: "Almeida Revista e Atualizada", descricao: "Uma revisão da tradução de Almeida com linguagem atualizada e próxima ao estilo original." },
    { sigla: "ARC", nome: "Almeida Revista e Corrigida", descricao: "Uma versão revisada da tradução de Almeida com foco na fidelidade ao texto original." },
    { sigla: "AS21", nome: "Almeida Século 21", descricao: "Uma tradução contemporânea que busca tornar o texto bíblico mais acessível aos leitores modernos." },
    { sigla: "JFAA", nome: "João Ferreira de Almeida Atualizada", descricao: "Baseada na tradução de Almeida, com algumas atualizações na linguagem para facilitar a compreensão." },
    { sigla: "KJA", nome: "King James Atualizada", descricao: "Uma versão em português baseada na tradução King James em inglês, conhecida por seu estilo literário." },
    { sigla: "KJF", nome: "King James Fiel", descricao: "Uma tradução que busca manter a fidelidade à tradução King James em inglês, com estilo arcaico e formal." },
    { sigla: "NAA", nome: "Nova Almeida Atualizada", descricao: "Uma versão atualizada da Almeida Revista e Atualizada, com ajustes na linguagem para maior compreensibilidade." },
    { sigla: "NBV", nome: "Nova Bíblia Viva", descricao: "Uma tradução dinâmica e de fácil compreensão, buscando transmitir o significado do texto bíblico de forma clara." },
    { sigla: "NTLH", nome: "Nova Tradução na Linguagem de Hoje", descricao: "Uma tradução que utiliza uma linguagem atual e de uso comum, tornando a Bíblia mais acessível a todas as idades." },
    { sigla: "NVI", nome: "Nova Versão Internacional", descricao: "Uma tradução moderna que busca combinar fidelidade ao texto original com uma linguagem clara e fluente." },
    { sigla: "NVT", nome: "Nova Versão Transformadora", descricao: "Uma tradução que procura transmitir o significado e a mensagem do texto bíblico de forma mais dinâmica e impactante." },
    { sigla: "TB", nome: "Tradução Brasileira", descricao: "Uma das primeiras traduções diretamente do hebraico e grego para o português, seguindo uma abordagem mais literal e formal." }
  ];


  let resposta = "<b>Traduções disponíveis:</b>\n\n";
  traducoes.forEach(traducao => {
    resposta += `<b>• ${traducao.nome} (${traducao.sigla})</b>\n<i>     ${traducao.descricao}</i>\n\n`;
  });
  resposta += `🌟 Atualmente, temos <b>${traducoes.length} traduções</b> disponíveis!`;

  bot.sendMessage(message.chat.id, resposta, { parse_mode: "HTML" });
}

module.exports = {
  infotraduCommand,
};
