import Command from '../Structures/Command';

const remind = new Command;
remind.setName('remind')
    .setDescription('reminds you of something')
    .setExec((msgData, channel, content) => {
        var args = msgData.content.slice(prefix.length).trim().split(" ");
        var message = args[2];
        var timeout = args[1]
        if (isNaN(timeout)) {
            if (!message) {
                channel.send("please provide a valid message to remind.")
            } else {
                channel.send("reminder is gonna remind you in **" + Math.round(args[1] / 1000) + "s **with `" + args[2] + "`.");
                setTimeout(() => {
                    channel.send(message)
                }, timeout)
            }
        } else {
        channel.send("please provide a valid number.")
        }
    })
    .setAuthor('Nuro');
export default Say;
