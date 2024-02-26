import { Schema,model,mongoose } from "mongoose";

const Emailschema = new mongoose.Schema(
    {
      name: {
        type:String,
        required: [true,"message"]
      },
      email: {
          type:String,
          required: [true,"message"]
        },
      message: {
          type:String,
          required: [true,"message"]
        },
    },
    { versionKey: false }
  );
const Messages = mongoose.model("newmessage", Emailschema);

export default Messages