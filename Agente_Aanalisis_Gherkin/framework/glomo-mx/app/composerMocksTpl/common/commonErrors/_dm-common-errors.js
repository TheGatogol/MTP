'use strict';

module.exports = (COMPONENTS) => {
  const generateChannelName = eventName => 'global_error_' + eventName.replace(/-/g, '_');

  const COMMON_ERRORS_CODE = [
    'tsec-invalid',
    'tsec-expired',
    'tsec-cancelled',
    'high-risk-of-fraud'
  ];

  let addCommonErrors = () => {
    COMPONENTS.forEach(comp => {
      if ((comp.type === 'DM' ||  comp.type === 'CC')  && comp.properties.host) {
        let connOut = comp.properties.cellsConnections.out;

        if (!connOut) {
          comp.properties.cellsConnections.out = {};
          connOut = comp.properties.cellsConnections.out;
        }

        COMMON_ERRORS_CODE.forEach(commonErrorCode => {
          let channel = generateChannelName(commonErrorCode);

          //Add out channel to DM
          connOut[channel] = { bind: commonErrorCode };
        });
      }
    });
  };

  return addCommonErrors;
};
