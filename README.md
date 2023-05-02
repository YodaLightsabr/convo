# @gptfree/convo

A simple way to integrate right AI conversations with any project

## Usage

### Node.js

```js

import { Conversation } from "@gptfree/convo";

const conversation = await Conversation.create("How far away is Saturn?"); // create a new conversation with a prompt

await conversation.reply("What about Mars?"); // reply to the conversation

console.log(conversation.messages.toString()); // messages is a MessageList, which extends an array and has helper methods

```

### Web

```js

import { Conversation } from "https://gptfree.top/convo.js";

const conversation = await Conversation.create("How far away is Saturn?"); // create a new conversation with a prompt

await conversation.reply("What about Mars?"); // reply to the conversation

console.log(conversation.messages.toString()); // messages is a MessageList, which extends an array and has helper methods

```

