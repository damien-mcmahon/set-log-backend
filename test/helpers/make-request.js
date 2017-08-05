import CONFIG from './config';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

export function makeAPIRequest(query) {
  return chai.request(CONFIG.REQUEST_URL)
        .post(CONFIG.API_PATH)
        .send(query)
}