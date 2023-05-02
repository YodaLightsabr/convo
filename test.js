import { Conversation } from "./index.js";

const conversation = await Conversation.create("How far away is Saturn?");

await conversation.reply("What about Mars?");

console.log(conversation.messages.toString());

