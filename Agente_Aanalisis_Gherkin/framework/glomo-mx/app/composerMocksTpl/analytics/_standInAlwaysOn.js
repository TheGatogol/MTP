const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
  [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
  [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
  [CONSTANTS.USER_SEGMENT_GLOBAL]: '003001',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomoAlwaysOn
};
const commonFlowLevels = (levelOne = '', levelTwo = '', levelThree = '', levelFour = '') => {
  return {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: levelOne,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: levelTwo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: levelThree,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: levelFour
  };
};

const analyticsStandInAlwaysOn = {
  'key': 'glomo.analytics.stand.in.always.on',
  'defaultValue': true
};

const standInOperatives = (levelOne = '', operation = '') => {
  const operative = {
    ACCOUNT_MORE_DETAILS: LITERALS.commons.informationIsNotAvailable + ' mas informacion',
    ACTIVATION_CARD: LITERALS.commons.operationIsNotAvailable + ' apagar tarjeta',
    BILL_PAYMENT: LITERALS.commons.operationIsNotAvailable + ' pagar servicio',
    CARD_EDIT_LIMITS: LITERALS.commons.informationIsNotAvailable + ' control de gastos',
    CARD_MORE_DETAILS: LITERALS.commons.informationIsNotAvailable + ' detalle de tarjeta',
    CARD_STATUS: LITERALS.commons.informationIsNotAvailable + ' estado de cuenta',
    CARDLESS_WITHDRAW: LITERALS.commons.operationIsNotAvailable + ' retiro sin tarjeta',
    DIGITAL_CARD: LITERALS.commons.operationIsNotAvailable + ' comprar con tarjeta digital',
    FOOTER_HELP: LITERALS.commons.informationIsNotAvailable + ' ayuda',
    FOOTER_NOTIFICATION: LITERALS.commons.informationIsNotAvailable + ' notificaciones',
    FOOTER_OPPORTUNITIES: LITERALS.commons.informationIsNotAvailable + ' oportunidades',
    FOOTER_PFM: LITERALS.commons.informationIsNotAvailable + ' pfm',
    HELP_SECTION: LITERALS.commons.informationIsNotAvailable + ' preguntas frecuentes',
    OPPORTUNITIES: LITERALS.commons.informationIsNotAvailable + ' operaciones',
    PAY_CARD: LITERALS.commons.operationIsNotAvailable + ' pagar tarjeta',
    TRANSFER: LITERALS.commons.operationIsNotAvailable + ' transferir',
    VIEW_MORE: LITERALS.commons.operationIsNotAvailable.replace(/operacion|disponible/g, match => match === 'operacion' ? 'operaciones' : 'disponibles'),
    NAVIGATION_DETAIL: LITERALS.commons.transactionDetail,
    SHARE_TRANSACTION: LITERALS.commons.operationIsNotAvailable + ' compartir comprobante'
  }[operation] || operation;

  const levels = (() => {
    if (levelOne.length === 0 && operation.length > 0) {
      return commonFlowLevels(operative);
    } else if (levelOne.length > 0 && operation.length === 0) {
      return commonFlowLevels(levelOne, LITERALS.commons.detail);
    } else if (operation === 'SHARE_TRANSACTION') {
      return commonFlowLevels(levelOne, LITERALS.commons.detail, LITERALS.commons.transactionDetail, operative);
    } else {
      return commonFlowLevels(levelOne, LITERALS.commons.detail, operative);
    }
  })();
  const figerPrint = UTILS.getAdvancedFootprint({
    ...levels,
    ...COMMONS
  });
  UTILS.addFeatureFlag(figerPrint, analyticsStandInAlwaysOn);
  return figerPrint;
};

const standInActivationError = UTILS.getAdvancedFootprint({
  ...COMMONS,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.deviceError,
  [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.deviceError
});

UTILS.addFeatureFlag(standInActivationError, analyticsStandInAlwaysOn);

module.exports = () => {
  return {
    standInOperatives,
    standInActivationError
  };
};