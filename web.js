export class MessageList extends Array {
    get latest () {
        return this[this.length - 1];
    }

    toString () {
        return this.map(message => (message.author == "user" ? "User: " : "GPT-Free: " )+ message.text).join("\n\n");
    }
}

export class Conversation {
    constructor (messages = [], id = null) {
        this.messages = MessageList.from(messages);
        this.id = id;
    }

    async reply (message) {
        this.messages.push({
            author: "user",
            text: message
        });

        const { response } = await fetch("https://gptfree.top/conversations/reply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                conversationId: this.id,
                message
            })
        }).then(res => res.json());

        this.messages.push({
            author: "gpt-free",
            text: response
        });

        return response;
    }

    static async create (message) {
        const { response, conversationId } = await fetch("https://gptfree.top/conversations/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        }).then(res => res.json());

        const conversation = new Conversation([
            {
                author: "user",
                text: message
            },
            {
                author: "gpt-free",
                text: response
            }
        ], conversationId);

        return conversation;
    }
}

export default Conversation;