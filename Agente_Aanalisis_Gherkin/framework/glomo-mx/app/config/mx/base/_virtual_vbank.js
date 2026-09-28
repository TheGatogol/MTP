'use strict';

const qaConfig = require('./_dev.js');

qaConfig.globalServices.host = 'http://localhost:9000/SRVS_A02';
qaConfig.globalServices.hostAkamai = 'http://localhost:9000';
qaConfig.globalServices.hostGrantingTicket = 'http://localhost:9000/QSRV_A02';
qaConfig.globalServices.hostExternal = 'http://localhost:9000/SRES_A02';
qaConfig.settingsHost = 'http://localhost:9001';
qaConfig.aemHost = 'http://localhost:9031';
qaConfig.genesysHost = 'http://localhost:9877';
qaConfig.globalServices.publicSettingsHost = 'http://localhost:9085';
qaConfig.globalServices.tenantGlobalConfig.host = 'http://localhost:9002';
qaConfig.globalServices.bmeHost = 'http://localhost:9003';
qaConfig.globalServices.portunusConfig.host = 'http://localhost:9004';
qaConfig.globalServices.conversaConfig.hostConversa = 'http://localhost:9040';
qaConfig.adobeTargetDisabled = true;


// Detalle sobre el uso de estos mocks JIRA.GLOMOMX-129579
qaConfig.mocksCipher = {
  rsaencrypt: 'hdVU13frXLqijE6ftqwnkIU0Y5ebErtlicKNZXXbebCYJtQlP5wrpRFQsRtRStcPIrbOgPIoBFVMfn4dLRksF7zpEgeVINlWkMuS+qdiKWLVENIqbesvqy4IbYlt2F+26unHv5ToyRWxrIsMR0mMYlYaUbXWpe0KQ4Nfi7A1DDIRH3FuNVYlJYn6fwDBINw6vMONblyXscE6b6JEk6c1rHOrv38bDficC2Cyyg/ZwQLaOqxS3aGsp3VZgtIyvTqXtMEHJotybb4UQ7ELZWEi25WH+uygGtcRBdM8On3NfbD/ffAslH6jRNQ9fJ2cnNvN2h2No/MSCBurM6I5HyuHRg==',
  key: 'DED7FA3E3029305DE67D922DA3F300B1',
  vector: '25EB7776C1FFCD66888F35106208A29B'
};

module.exports = qaConfig;
