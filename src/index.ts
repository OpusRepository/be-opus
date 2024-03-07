import {Buttons, Client, LocalAuth} from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({
    authStrategy: new LocalAuth()
})

client.on("ready", ()=>{
    console.log("Bot Online");
});

client.on("message",  (message) => {
    if(message.body !== null){
        message.reply(`pesan anda adalah: *${message.body}*`)

        const parts = ['https://', 'example', '.com'];

        // Susun kembali bagian-bagian menjadi tautan yang lengkap
        const link = parts.join('');

        // Kirim pesan dengan teks biasa dan tautan yang "dikamuflase"
        const msg = `Klik di sini untuk melihat informasi lebih lanjut: ${link}`;
        client.sendMessage(message.from, msg);
        console.log(message)
    }
})
client.initialize();