import web3 from 'web3';

const address = '0x693d9a2740aD1d02e17059f21a7FD095CeF6B0A9';
const abi = '[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability
":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutabil
ity":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"addr
ess[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outpu
ts":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint2
56"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"functio
n"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]';

export default new web3.eth.Contract(abi, address);
