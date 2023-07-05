const { Schema } = require("mongoose");

const ChatSchema = new Schema({
  chatId: {
    type: Number,
    required: true,
    unique: true,
  },
  chatName: {
    type: String,
    required: false,
  },
  isBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  forwarding: {
    type: Boolean,
    required: true,
    default: true,
  },
  versdia: {
    type: Boolean,
    required: true,
    default: true,
  },
  verstema: {
    type: String,
    enum: [
      "Adoração",
      "Amor",
      "Consolo",
      "Encorajamento",
      "Fé",
    ],
    default: "Encorajamento",
  },
  last_interaction_group: {
    type: String,
    required: false
  },
});

module.exports = ChatSchema;
