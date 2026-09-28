'use strict';


const preProdConfig = require('./_prod.js');

preProdConfig.environmentType = 'lo';
preProdConfig.globalServices.host = 'https://lo-glomo-mx.prev.grupobbva.com:443/SRVS_A02';
preProdConfig.globalServices.hostGrantingTicket = 'https://lo-glomo-mx.prev.grupobbva.com:443/QSRV_A02';
preProdConfig.globalServices.hostExternal = 'https://lo-glomo-mx.prev.grupobbva.com:443/SRES_A02';
preProdConfig.globalServices.hostAkamai = 'https://lo-glomo-mx.prev.grupobbva.com:443';

module.exports = preProdConfig;
