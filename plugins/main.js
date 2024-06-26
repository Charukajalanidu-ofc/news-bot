const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 
cmd({
    pattern: "alive",
    react: "👋",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
const tes = `${config.ALIVE}

⦁ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴɪ ᴛᴇᴀᴍ⦁`
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: tes }, { quoted: mek  ,messageId:genMsgId() })

} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})
cmd({
        pattern: "restart",
        react: "🔄",
        desc: "To restart bot",
        category: "owner",
        filename: __filename
    },
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{    const { exec } = require("child_process")
            const txt = await conn.sendMessage(from, { text: '🌟 𝗦𝗧𝗢𝗣𝗣𝗜𝗡𝗚 𝗔𝗟𝗟 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡𝗦 𝗔𝗡𝗗 𝗡𝗢𝗪 𝗠𝗔𝗡𝗜 𝗢𝗙𝗙𝗜𝗖𝗔𝗟 𝗡𝗘𝗪𝗦 𝗕𝗢𝗧 𝗜𝗦 𝗥𝗘𝗦𝗧𝗔𝗥𝗧𝗜𝗡𝗚...♻' }, { quoted: mek, messageId:genMsgId() });
            await conn.sendMessage(from, { react: { text: "🔄", key: txt.key }})
            exec('pm2 restart all')
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
            pattern: "join",
            react: "🔗",
            desc: "joins group by link",
            category: "group",
            use: '<group link.>',
        },
       async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{  if (!q) return reply(`Please give me Query`);
