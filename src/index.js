require("dotenv").config();

const required = ["TELEGRAM_API", "DB_STRING", "groupId", "channelId", "nameBot", "ownerId", "channelIdIt"];
const missing = required.filter((name) => !process.env[name] || !process.env[name].trim());
if (missing.length) {
  console.error(`Variáveis de ambiente ausentes: ${missing.join(", ")}`);
  process.exit(1);
}

require("./handlers/main");
