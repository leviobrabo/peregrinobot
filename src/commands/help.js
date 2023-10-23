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

  bot.on("callback_query", async (callbackQuery) => {
    if (callbackQuery.message.chat.type !== "private") {
      return;
    }
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;
    const functions = {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🙏 Oração",
              callback_data: "oracao",
            },
            {
              text: "📝 Anotação",
              callback_data: "anotacao",
            },
          ],
          [
            {
              text: "🖌 Traduções",
              callback_data: "traducao",
            },
          ],
          [
            {
              text: "📆 Plano bíblico",
              callback_data: "biblico",
            },
            {
              text: "📖 Planos",
              callback_data: "planos",
            },
          ],
          [
            {
              text: "⏰ Versículos",
              callback_data: "versiculos",
            },
          ],
          [
            {
              text: "⚡️ Atividade",
              callback_data: "atividade",
            },
            {
              text: "🔎 Bíblia inline",
              callback_data: "bibliainline",
            },
          ],
          [
            {
              text: "Voltar",
              callback_data: "back_to_help",
            },
          ],
        ],
      },
    }
    const funcao = `<b>As funções do bot</b>\n\nClique nos botões abaixo para saber informações de cada funcionalidade do bot.\n\nPara ter acesso a lista de comandos, digite /comandos`

    if (callbackQuery.data === "commands") {
      await bot.editMessageText(funcao, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: functions.reply_markup,
      });
    } else if (callbackQuery.data === "donate") {
      const resposta_donate = `Olá, ${firstName}! \n\nContribua com qualquer valor para ajudar a manter o servidor do bot online e com mais recursos! Sua ajuda é fundamental para mantermos o bot funcionando de forma eficiente e com novas funcionalidades. \n\nPara fazer uma doação, utilize a chave PIX a seguir: \nPix: <code>32dc79d2-2868-4ef0-a277-2c10725341d4</code>\nBanco: Picpay\nNome: Luzia\n\nObrigado pela sua contribuição! 🙌\n\n<b>BTC:</b> <code>bc1qjxzlug0cwnfjrhacy9kkpdzxfj0mcxc079axtl</code>\n<b>ETH/USDT:</b> <code>0x1fbde0d2a96869299049f4f6f78fbd789d167d1b</code>`;

      await bot.editMessageText(resposta_donate, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_help",
              },
            ],
          ],
        },
      })
    } else if (callbackQuery.data === "back_to_help") {
      await bot.editMessageText(text, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
      });
    } else if (callbackQuery.data === "back_to_commands") {
      await bot.editMessageText(funcao, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: functions.reply_markup,
      });
    } else if (callbackQuery.data === "oracao") {
      const msgoracao = '<b>Para adicionar seus motivos de oração, siga estas etapas:</b>\n\n' +
        '1. <code>/oracao</code> - Visualiza seus motivos de oração.\n' +
        '2. <code>/addmotivo</code> &lt;motivo&gt; - Adiciona um novo motivo de oração.\n' +
        '3. <code>/delmotivo</code> &lt;número&gt; - Remove um motivo de oração específico.\n' +
        '4. <code>/horariooracao</code> &lt;horário&gt; - Define o horário de oração (formato 24h). <code>Ex: 21:30</code>\n' +
        '5. <code>/desativarhorario</code> - Desative o horário de oração\n' +
        '6. <code>/intercessao</code> - Envie um pedido de intercessão para o canal @pedidosdeoracaoperegrino\n\n' +
        'Certifique-se de ter no máximo <b>5 motivos</b> de oração cadastrados. Para mais informações digite /ajudaoracao';
      await bot.editMessageText(msgoracao, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "anotacao") {
      const msganotacao = '<b>Para usar os comandos de anotação, siga estas etapas:</b>\n\n<b>1.</b> Digite <code>/anotacao</code> para visualizar suas anotações.\n<b>2.</b> Use <code>/addanotacao</code> &lt;texto que deseja anotar aqui&gt; para adicionar uma nova anotação.\n<b>3.</b> Utilize <code>/delanotacao</code> &lt;número&gt; para remover uma anotação específica.\n\n<b>Certifique-se de ter no máximo 10 anotações cadastradas e usar somente 200 caracteres. Para mais informações digite: /ajudaanotacao</b>';
      await bot.editMessageText(msganotacao, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "traducao") {
      const msgatraducao = '<b>O Pelegrino possibilita que você escolha dentre 14 traduções a sua preferida</b>\n\nPela glória de Deus possuímos irmãos dedicados na propagação o Evangelho de Cristo, e com a ajuda do programadores <a href="https://github.com/damarals/biblias">Daniel Amaral</a> e <a href="https://github.com/thiagobodruk/biblia">Thiago Bodruk</a>\n\nPara saber mais digite: /infotradu!';
      await bot.editMessageText(msgatraducao, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "biblico") {
      const msgplanobiblico = '<b>Plano bíblico 365 dias</b>\n\nEsse plano bíblico segue a linha canônica, então vai direto para a Bíblia de Gênesis a Apocalipse. Você receberá leituras para cada dia da semana como um guia constante para terminar a Bíblia inteira em um ano.\n\nEnvie /planobiblico para iniciar o plano!\nE se quiser mudar a tradução digita /traducao';
      await bot.editMessageText(msgplanobiblico, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "planos") {
      const msgplano = '<b>O Pelegrino possui inúmeros planos bíblicos</b>\n\nEsses planos são projetados para ajudar as pessoas a se envolverem regularmente com a Palavra de Deus, fornecendo uma estrutura para ler a Bíblia de forma consistente ao longo de um período de tempo.\n\nEnvie /plano para escolher um plano e /topplanos para ver o ranking';
      await bot.editMessageText(msgplano, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "versiculos") {
      const msgplano = '<b>O Pelegrino envia diariamente versículos bíblicos</b>\n\nO envio acontece às 8 horas, e é enviado um versículo por dia\n\nEnvie /verson para ativar e /versoff para desativar o envio!\n\nO envio de versículo também ocorrer para os grupos, basta colocar o bot como administrador no grupo e escolher um tema: /verstema e escolher entre Adoração, Amor, Consolo, Encorajamento, Fé'; await bot.editMessageText(msgplano, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "atividade") {
      const msgatividade = '<b>O Pelegrino possui um sistema que contabiliza os dias de uso no bot</b>\n\nE possuímos um sistema de rank que disponibiliza níveis (de forma ludica) que é alcançado a cada perseverança \n\nEnvie /dia para saber maiis e /topdias para ver o ranking';
      await bot.editMessageText(msgatividade, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    } else if (callbackQuery.data === "bibliainline") {
      const msginline = '<b>O Pelegrino possui uma bíblia inline</b>\n\nVocê pode tá se perguntando o que seria isso... basicamente é uma consulta por uma linha de comando, isto é, você pode consultar a bíblia em qualquer lugar do telegram (Grupos, Canais e chat privado).\n\nBasta enviar <code>@operegrino_bot Gênesis 1</code>\n<code>@operegrino_bot gn 1</code>\n<code>@operegrino_bot ap 1:2</code>\n<code>@operegrino_bot ex 1:5-8</code>.\n\nPara acessar a lista dos nome dos livros ou abreviações digite: /livros !';
      await bot.editMessageText(msginline, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Bíblia",
                switch_inline_query_current_chat: '',
              },
            ],
            [
              {
                text: "Voltar",
                callback_data: "back_to_commands",
              },
            ],
          ],
        },
      });
    }
  });


  bot.sendMessage(message.chat.id, text, options);
}

module.exports = {
  helpCommand,
};
