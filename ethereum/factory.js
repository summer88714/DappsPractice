import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x43D66d012F060886a4Cc94260C6DB44aAE7eC824'
);

export default instance;
