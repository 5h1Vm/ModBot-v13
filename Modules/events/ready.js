module.exports = Client => {
    Client.on("ready", () => {
        console.log(`Logged in through ${Client.user.tag}`);
    })
}