const { Schema, model } = require("mongoose");
// const gravatar = require("gravatar");

const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Set password for user"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
