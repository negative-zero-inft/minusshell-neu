import { TextChannel } from "discord.js";
import log from "../other/log"
import { CmdTools } from "../other/typing";

module.exports = {

    name: "sendmsg",
    developers: ["nrd"],
    version: "1.0.0",
    usage: "sendmsg [channel ID to send a message in] [message]",
    run: (tools: CmdTools) =>{

        if(!tools.input.args[1]) return log(`please input the channel id`, 1, "sendmsg", true)
        if(!tools.input.args[2]) return log(`please input the message content`, 1, "sendmsg", true)
        const channel = tools.client.channels.cache.get(tools.input.args[1]) as TextChannel;
        const msg = tools.input.args.splice(2).join(" ")
        channel.send(msg); 
        log(`sent ${msg}`, 4, "sendmsg", true, true)
        return
    }
}