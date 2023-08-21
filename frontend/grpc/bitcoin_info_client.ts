// // import * as grpc from '@grpc/grpc-js';
// // import * as protoLoader from '@grpc/proto-loader';

// const PROTO_PATH = __dirname + '/bitcoin_info.proto';

// // var parseArgs = require('minimist');
// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const packageDefinition = protoLoader.loadSync(
//     PROTO_PATH,
//     {keepCase: true,
//      longs: String,
//      enums: String,
//      defaults: true,
//      oneofs: true
//     });
// const bitcoin_proto = grpc.loadPackageDefinition(packageDefinition).BitcoinInfo;




// function main() {
//   // var argv = parseArgs(process.argv.slice(2), {
//   //   string: 'target'
//   // });
//   // var target;
//   // if (argv.target) {
//   //   target = argv.target;
//   // } else {
//   //   target = 'localhost:50051';
//   // }
//   const target = 'backend:50051';
//   var client = new bitcoin_proto.SearchPrice(target,
//                                        grpc.credentials.createInsecure());
//   // var user;
//   // if (argv._.length > 0) {
//   //   user = argv._[0];
//   // } else {
//   //   user = 'world';
//   // }
//   let params = {place: "Coincheck", date_from: "2023-08-18T23:02:00+09:00", date_to: "2023-08-20T15:02:00+09:00", interval: 1}
//   client.getPrices(params, (err, response) => {
//     console.log('Greeting:', response, err);
//   });
// }

// main();