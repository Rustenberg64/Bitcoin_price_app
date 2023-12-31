// source: bitcoin_info.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.BitcoinInfo.Price', null, global);
goog.exportSymbol('proto.BitcoinInfo.PriceRequest', null, global);
goog.exportSymbol('proto.BitcoinInfo.Prices', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BitcoinInfo.PriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BitcoinInfo.PriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BitcoinInfo.PriceRequest.displayName = 'proto.BitcoinInfo.PriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BitcoinInfo.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BitcoinInfo.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BitcoinInfo.Price.displayName = 'proto.BitcoinInfo.Price';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BitcoinInfo.Prices = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BitcoinInfo.Prices.repeatedFields_, null);
};
goog.inherits(proto.BitcoinInfo.Prices, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BitcoinInfo.Prices.displayName = 'proto.BitcoinInfo.Prices';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BitcoinInfo.PriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.BitcoinInfo.PriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BitcoinInfo.PriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.PriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    place: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dateFrom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dateTo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BitcoinInfo.PriceRequest}
 */
proto.BitcoinInfo.PriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BitcoinInfo.PriceRequest;
  return proto.BitcoinInfo.PriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BitcoinInfo.PriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BitcoinInfo.PriceRequest}
 */
proto.BitcoinInfo.PriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateFrom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BitcoinInfo.PriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BitcoinInfo.PriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BitcoinInfo.PriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.PriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDateTo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string place = 1;
 * @return {string}
 */
proto.BitcoinInfo.PriceRequest.prototype.getPlace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BitcoinInfo.PriceRequest} returns this
 */
proto.BitcoinInfo.PriceRequest.prototype.setPlace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string date_from = 2;
 * @return {string}
 */
proto.BitcoinInfo.PriceRequest.prototype.getDateFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BitcoinInfo.PriceRequest} returns this
 */
proto.BitcoinInfo.PriceRequest.prototype.setDateFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date_to = 3;
 * @return {string}
 */
proto.BitcoinInfo.PriceRequest.prototype.getDateTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BitcoinInfo.PriceRequest} returns this
 */
proto.BitcoinInfo.PriceRequest.prototype.setDateTo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 interval = 4;
 * @return {number}
 */
proto.BitcoinInfo.PriceRequest.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BitcoinInfo.PriceRequest} returns this
 */
proto.BitcoinInfo.PriceRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BitcoinInfo.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.BitcoinInfo.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BitcoinInfo.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    place: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestedAt: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ltp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BitcoinInfo.Price}
 */
proto.BitcoinInfo.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BitcoinInfo.Price;
  return proto.BitcoinInfo.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BitcoinInfo.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BitcoinInfo.Price}
 */
proto.BitcoinInfo.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestedAt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLtp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BitcoinInfo.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BitcoinInfo.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BitcoinInfo.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPlace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestedAt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLtp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.BitcoinInfo.Price.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BitcoinInfo.Price} returns this
 */
proto.BitcoinInfo.Price.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string place = 2;
 * @return {string}
 */
proto.BitcoinInfo.Price.prototype.getPlace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BitcoinInfo.Price} returns this
 */
proto.BitcoinInfo.Price.prototype.setPlace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string requested_at = 3;
 * @return {string}
 */
proto.BitcoinInfo.Price.prototype.getRequestedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BitcoinInfo.Price} returns this
 */
proto.BitcoinInfo.Price.prototype.setRequestedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 ltp = 4;
 * @return {number}
 */
proto.BitcoinInfo.Price.prototype.getLtp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BitcoinInfo.Price} returns this
 */
proto.BitcoinInfo.Price.prototype.setLtp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BitcoinInfo.Prices.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BitcoinInfo.Prices.prototype.toObject = function(opt_includeInstance) {
  return proto.BitcoinInfo.Prices.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BitcoinInfo.Prices} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.Prices.toObject = function(includeInstance, msg) {
  var f, obj = {
    pricesList: jspb.Message.toObjectList(msg.getPricesList(),
    proto.BitcoinInfo.Price.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BitcoinInfo.Prices}
 */
proto.BitcoinInfo.Prices.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BitcoinInfo.Prices;
  return proto.BitcoinInfo.Prices.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BitcoinInfo.Prices} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BitcoinInfo.Prices}
 */
proto.BitcoinInfo.Prices.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.BitcoinInfo.Price;
      reader.readMessage(value,proto.BitcoinInfo.Price.deserializeBinaryFromReader);
      msg.addPrices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BitcoinInfo.Prices.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BitcoinInfo.Prices.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BitcoinInfo.Prices} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BitcoinInfo.Prices.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.BitcoinInfo.Price.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Price prices = 1;
 * @return {!Array<!proto.BitcoinInfo.Price>}
 */
proto.BitcoinInfo.Prices.prototype.getPricesList = function() {
  return /** @type{!Array<!proto.BitcoinInfo.Price>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BitcoinInfo.Price, 1));
};


/**
 * @param {!Array<!proto.BitcoinInfo.Price>} value
 * @return {!proto.BitcoinInfo.Prices} returns this
*/
proto.BitcoinInfo.Prices.prototype.setPricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.BitcoinInfo.Price=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BitcoinInfo.Price}
 */
proto.BitcoinInfo.Prices.prototype.addPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.BitcoinInfo.Price, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BitcoinInfo.Prices} returns this
 */
proto.BitcoinInfo.Prices.prototype.clearPricesList = function() {
  return this.setPricesList([]);
};


goog.object.extend(exports, proto.BitcoinInfo);
