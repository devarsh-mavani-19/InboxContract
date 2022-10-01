const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')
const env = require('dotenv')
env.config()
const provider = new HDWalletProvider(
    process.env.pk,
    process.env.url
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log("Attempting to deploy from account " + accounts[0])
    let contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['|| Jay Shree Gopal ||']})
    .send({gas: '1000000', from: accounts[0]})
    console.log('Contract deployed to ', contract.options.address)
}

deploy()
