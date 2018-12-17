'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on gamecore-p2p Module {0}'
};

module.exports = require('gamecore-lib').errors.extend(spec);
