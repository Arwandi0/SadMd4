let handler =  m => m.reply(`
╭─「 Donasi NON-PULSA 」
│ • https://sociabuzz.com/hukubot
╰────
╭─「 Donasi PULSA 」
│ • TELKOMSEL 082195236600
│ • INDOSAT/IM3 085757181252
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
