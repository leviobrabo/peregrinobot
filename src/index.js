require("dotenv").config();

const required = ["TELEGRAM_API", "DB_STRING", "groupId", "channelId", "nameBot", "ownerId", "channelIdIt"];
const missing = required.filter((key) => !process.env[key] || !process.env[key].trim());
if (missing.length) {
  console.error(`Variáveis de ambiente ausentes: ${missing.join(", ")}`);
  process.exit(1);
}

require("./handlers/main");
