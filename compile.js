const path = require('path')
const fs = require('fs')
const solc = require('solc')
const inboxPath = path.resolve(__dirname, 'contracts',  'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf-8')
let op = solc.compile(source, 1).contracts[':Inbox']
module.exports = op
