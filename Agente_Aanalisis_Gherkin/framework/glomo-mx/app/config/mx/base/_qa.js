'use strict';


const qaConfig = require('./_dev.js');

qaConfig.globalServices.host = 'https://c-glomo-mx.prev.grupobbva.com:443/QSRV_A02';
qaConfig.globalServices.hostGrantingTicket = 'https://c-glomo-mx.prev.grupobbva.com:443/QSRV_A02';
qaConfig.globalServices.hostExternal = 'https://c-glomo-mx.prev.grupobbva.com:443/SRES_A02';
qaConfig.globalServices.hostAkamai = 'https://c-glomo-mx.prev.grupobbva.com:443';

module.exports =  qaConfig;
