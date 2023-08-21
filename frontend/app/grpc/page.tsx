'use client'
global.XMLHttpRequest = require('xhr2');
import * as grpcWeb from 'grpc-web';
import {SearchPriceClient} from './Bitcoin_infoServiceClientPb';
// import {SearchPriceClient} from './bitcoin_info_grpc_web_pb';
// const SearchPriceClient = dynamic(() => import('./Bitcoin_infoServiceClientPb').then(module => module.SearchPriceClient));
import {PriceRequest, Prices} from './bitcoin_info_pb';

// const grpcWeb = require('grpc-web');
// const {SearchPriceClient} = require('./Bitcoin_infoServiceClientPb');
// const {PriceRequest, Prices} = require('./bitcoin_info_pb');

// new SearchPriceClient('');
// SearchPriceClient


// request.setPlace('Hello World!');

// const call = serchService.getPrices(request, {'custom-header-1': 'value1'},
//   (err, response) => {
//     console.log(response);
//   });

export default function home() {
  const serchService = new SearchPriceClient('http://localhost:10000',null,null);
  const request = new PriceRequest();
  request.setDateFrom('2023-08-19T11:01:00+09:00');
  request.setDateTo('2023-08-21T17:01:00+09:00');
  request.setPlace('Coincheck');
  request.setInterval(1);
  serchService.getPrices(request, {'custom-header-1': 'value1'},
  (err, response) => {
  console.log(err,response);
  console.log(response.getPricesList());
  console.log(response.getPricesList()[0]);
  console.log(response.getPricesList()[0]);
  });
  return 0
}