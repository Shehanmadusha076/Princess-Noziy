import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*👸 Princess-Noziy 👸 Github*

👸 Repo : ${_package.homepage}

If you get more info of 👸 Princess-Noziy 👸 Please Contact 94762000126 💰

*🔰 Special thanks to 🔰 𝐷𝛪𝛮𝑈𝑊𝛥*
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
