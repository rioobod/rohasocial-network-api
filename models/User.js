const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    //   getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

UserSchema.virtual("friendCount").get(() => {
  return this?.friends?.length??0;
});

const User = model("User", UserSchema);
module.exports = User;

// https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email
