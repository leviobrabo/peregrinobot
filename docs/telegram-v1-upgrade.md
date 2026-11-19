# Atualização incremental do Telegram SDK para 1.2.0

## Motivo
A série 2.x reescreveu a API e não é compatível com o bot legado. A série 1.x foi reescrita em TypeScript, substituiu a dependência `request` e preservou a maior parte dos métodos, eventos e argumentos posicionais. Desde 1.1.2, suporta CommonJS com `const { TelegramBot } = require("node-telegram-bot-api")`.

Fontes:
- https://github.com/yagop/node-telegram-bot-api/blob/master/CHANGELOG.md
- https://www.npmjs.com/package/node-telegram-bot-api

## Alterações propostas
- Fixar `node-telegram-bot-api` em `1.2.0`, sem salto automático para a API 2.x.
- Alterar `src/bot.js` para importar `TelegramBot` como exportação nomeada.

## Validação obrigatória antes de merge e deploy
1. Gerar e versionar `package-lock.json` com `npm install --package-lock-only` em ambiente limpo.
2. Rodar `npm ci`, `npm test -- --runInBand` e `npm audit --omit=dev`.
3. Testar `require("node-telegram-bot-api").TelegramBot` e seus métodos com token fictício e polling desligado.
4. Revisar usos de `answerCallbackQuery` e opções de mídia conforme mudanças da versão 1.x.
5. Validar comandos, callbacks, mensagens e planos com bot de teste antes do deploy.
6. Confirmar que `.env` da VPS permanece intacto e que não há outro polling usando o mesmo token.

**Não mesclar ou implantar sem esses testes.** Esta proposta ainda não está validada.
