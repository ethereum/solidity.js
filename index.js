var coder = require('./lib/coder');

var solidity = {};
solidity.encodeParam = coder.encodeParam.bind(coder);
solidity.encodeParams = coder.encodeParams.bind(coder);
solidity.decodeParam = coder.decodeParam.bind(coder);
solidity.decodeParams = coder.decodeParams.bind(coder);

module.exports = solidity;

