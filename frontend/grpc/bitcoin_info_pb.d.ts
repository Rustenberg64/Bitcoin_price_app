import * as jspb from 'google-protobuf'



export class PriceRequest extends jspb.Message {
  getPlace(): string;
  setPlace(value: string): PriceRequest;

  getDateFrom(): string;
  setDateFrom(value: string): PriceRequest;

  getDateTo(): string;
  setDateTo(value: string): PriceRequest;

  getInterval(): number;
  setInterval(value: number): PriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PriceRequest): PriceRequest.AsObject;
  static serializeBinaryToWriter(message: PriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceRequest;
  static deserializeBinaryFromReader(message: PriceRequest, reader: jspb.BinaryReader): PriceRequest;
}

export namespace PriceRequest {
  export type AsObject = {
    place: string,
    dateFrom: string,
    dateTo: string,
    interval: number,
  }
}

export class Price extends jspb.Message {
  getId(): number;
  setId(value: number): Price;

  getPlace(): string;
  setPlace(value: string): Price;

  getRequestedAt(): string;
  setRequestedAt(value: string): Price;

  getLtp(): number;
  setLtp(value: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    id: number,
    place: string,
    requestedAt: string,
    ltp: number,
  }
}

export class Prices extends jspb.Message {
  getPricesList(): Array<Price>;
  setPricesList(value: Array<Price>): Prices;
  clearPricesList(): Prices;
  addPrices(value?: Price, index?: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prices.AsObject;
  static toObject(includeInstance: boolean, msg: Prices): Prices.AsObject;
  static serializeBinaryToWriter(message: Prices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prices;
  static deserializeBinaryFromReader(message: Prices, reader: jspb.BinaryReader): Prices;
}

export namespace Prices {
  export type AsObject = {
    pricesList: Array<Price.AsObject>,
  }
}

