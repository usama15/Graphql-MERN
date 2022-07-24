const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", ClientSchema);
