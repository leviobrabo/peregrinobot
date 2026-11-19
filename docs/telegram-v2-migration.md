# Migração do Telegram SDK 0.66 -> 2.4 (em andamento)

## Estado verificado
- A versão 0.66.0 exporta um construtor `new TelegramBot(token, { polling: true })`.
- A versão 2.4.0 exporta `Bot` e `Api`; não exporta `TelegramBot` nem `default`.
- `Bot.prototype.onText` não existe; `Api.prototype.sendMessage`, `sendPhoto` e `editMessageText` existem.
- `src/handlers/main.js` tem ~6923 linhas, com 61 registros `bot.onText`, 9 `bot.on`, 2 `bot.once`, e centenas de operações da API.
- O teste isolado de `node-telegram-bot-api@2.4.0` retornou zero vulnerabilidades. Isso não equivale a uma auditoria do aplicativo migrado.

## Migração necessária
1. Reestruturar `src/bot.js` para inicializar a API 2.x e configurar long polling e erros.
2. Migrar os registros `onText` para roteamento por mensagens/comandos, preservando regex, argumentos e ordem dos handlers.
3. Migrar listeners de `message`, `callback_query`, `inline_query` e listeners temporários; prevenir vazamento de listeners e processamento duplicado.
4. Adaptar chamadas `sendMessage`, `editMessageText`, `deleteMessage`, `answerCallbackQuery`, `answerInlineQuery`, `getChatAdministrators`, `getChatMember`, `forwardMessage`, `copyMessage`, `sendAudio`, `sendPhoto`, `setMyCommands`, `getMe` e `leaveChat`.
5. Confirmar assinatura, estrutura dos objetos de retorno, erros, markup e opções de mídia, sem alterar regras de negócio.
6. Adicionar testes de regressão para comandos, callbacks, paginação, planos bíblicos, rotinas cron e inicialização sem rede.
7. Atualizar `package.json` e lockfile **somente junto com o código migrado**; executar `npm ci`, `npm test` e `npm audit --omit=dev`.
8. Fazer smoke test com token de teste e banco de testes antes de implantação.
9. Implantar na VPS em janela controlada, preservando `.env`, e verificar PM2/logs; manter plano de rollback.

## Restrições
- Não executar `npm audit fix --force` na VPS.
- Não iniciar a versão 0.66.0 como se fosse uma versão segura.
- Não mesclar a migração até passar testes funcionais; os 105 testes atuais não cobrem toda a integração Telegram.
- O `package-lock.json` da VPS foi alterado localmente por `npm audit fix` e precisa ser reconciliado antes de `git pull`.
