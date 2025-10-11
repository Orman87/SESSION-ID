const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {ormanid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: ORMAN_X_TERRI,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = ormanid();
    let num = req.query.number;
        async function ORMAN_X_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_ORMAN_X_TERRI = ORMAN_X_TERRI({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "silva", "Mac OS"]
             });
             if(!Pair_Code_By_ORMAN_X_TERRI.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_ORMAN_X_TERRI.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_ORMAN_X_TERRI.ev.on('creds.update', saveCreds)
            Pair_Code_By_ORMAN_X_TERRI.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_ORMAN_X_TERRI.sendMessage(Pair_Code_By_ORMAN_X_TERRI.user.id, { text: 'Ormanxmd~' + b64data });

               let ORMAN_X_TEXT =`
*BLACK TECH INC*
*you have used QR method*
> YOU HAVE SUCCESSFULLY COMPLETED YOUR FIRST STEP
> NOW COPY THE SESSION CODE ABOVE AND USE IT IN YOUR PREFERED DEPLOYING SITE
____________________________________
╔════◇
║『 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍』

║ ❒ ORMAN : _https://wa.me/256704291969_

╚════════════════════❒
╔═════◇
║ 『••• OWNER INFO •••』
║ ❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@blacktech87_

║ ❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/256704291969_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VasAQRiGk1FtXGUz5T2V_
> fork the following repo
║ ❒ Repo 2: _https://github.com/Orman87/ORMAM_XMD_
╚════════════════════╝ 
 *Black tech inc*
___________________________________

'_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_ORMAN_X_TERRI.sendMessage(Pair_Code_By_ORMAN_X_TERRI.user.id,{text:ORMAN_X_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_ORMAN_X_TERRI.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    ORMAN_X_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await ORMAN_X_PAIR_CODE()
});
module.exports = router
