import Web3 from 'web3';
import config from '../test/config'

const vmContract = new Web3.eth.Contract(config.CONTRACT_ABI, config.CONTRACT_ADDRESS);
export default vmContract;