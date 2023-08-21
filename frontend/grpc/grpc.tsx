'use client'
global.XMLHttpRequest = require('xhr2');
import * as grpcWeb from 'grpc-web';
import {SearchPriceClient} from './Bitcoin_infoServiceClientPb';
import {PriceRequest, Prices} from './bitcoin_info_pb';
// import {SearchPriceClient} from './bitcoin_info_grpc_web_pb';
// const SearchPriceClient = dynamic(() => import('./Bitcoin_infoServiceClientPb').then(module => module.SearchPriceClient));

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
  const grpc_url =`${window.location.protocol}//${window.location.hostname}:10000`
  const serchService = new SearchPriceClient(grpc_url,null,null);
  const request = new PriceRequest();
  request.setDateFrom('2023-08-19T11:01:00+09:00');
  request.setDateTo('2023-08-21T17:01:00+09:00');
  request.setPlace('Coincheck');
  request.setInterval(1);
  let res = [];
  let response1 :Prices;
  async function aa(){
    const call = await serchService.getPrices(request, {'custom-header-1': 'value1'})
    console.log(call)
    console.log(call.toObject().pricesList)
  }
  aa()
  // const call = serchService.getPrices(request, {'custom-header-1': 'value1'})
  // call.then(  (response: Prices) => {
  //   console.log(response);
  //   console.log(response.getPricesList());})
  // serchService.getPrices(request, {'custom-header-1': 'value1'},
  // (err :grpcWeb.RpcError, response: Prices) => {
  // console.log(err,response);
  // console.log(response.getPricesList());
  // console.log(response.toObject());
  // });

  
  return 0
}