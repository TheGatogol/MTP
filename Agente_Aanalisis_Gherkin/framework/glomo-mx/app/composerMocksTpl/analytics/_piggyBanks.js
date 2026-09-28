module.exports = () => {
  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getAppStartedWithLevel2,
    getPageVisitRaw,
    getInternalLink,
    getInteractionLink,
    getAppCompletedRaw,
    getAppStep,
    getAdvancedFootprint
  } = require('./common/_utils');

  const {
    PAGE_PAGEINFO_AREA, PAGE_PAGEINFO_PAGESEGMENT, PAGE_PAGEINFO_LEVEL1, PAGE_PAGEINFO_LEVEL2, PAGE_PAGEINFO_LEVEL3, PAGE_PAGEINFO_LEVEL4, PAGE_PAGEINFO_ERRORPAGE,
    PAGE_PAGEINFO_PAGEINTENT, APPLICATION_APPLICATION_NAME, APPLICATION_APPLICATION_TYPE, APPLICATION_STATE,
    APPLICATION_FULLFILMENT, APPLICATION_GLOBAL_APPLICATION, PAGE_PAGEINFO_PROJECTNAME, APPLICATION_STEP,
    PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY, PRODUCT_STATE, PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT, PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY,
    PRODUCT_PRODUCT_SUBTYPE
  } = require('./common/_constants');

  const { commons: { private: nonPublic, transaction, information, persons, online, operative, successfulPage, approve, account, init, createPocket, addOn, withdraw },
    sections: { glomo }, currencies: { MXN }
  } = require('./common/_literals');

  const piggyBanksFeatureFlag = 'piggyBanks';
  const piggyBanksInteractionFlag = 'piggyBanks.interactions';

  const _setFeatureFlag = (...data) => getAnalyticFeatureFlag(piggyBanksFeatureFlag, ...data);
  const _setInteractionFlag = (...data) => getAnalyticFeatureFlag(piggyBanksInteractionFlag, ...data);

  const operations = {
    create: {
      level: account,
      level2: createPocket,
      level3: '1 datos del apartado',
      type: '',
      step: createPocket,
      startStep: 'crear',
      state: init,
      applicationName: createPocket,
      productSubtype: 'cuentas con chequera'
    },
    add: {
      level: account,
      level2: 'abonar apartado',
      level3: '1 importe',
      type: 'contribution',
      step: '1 importe',
      startStep: addOn,
      applicationName: 'abonar apartado'
    },
    return: {
      level: account,
      level2: 'retirar apartado',
      level3: '1 importe',
      type: 'withdrawal',
      step: '1 monto',
      startStep: withdraw,
      applicationName: 'retirar apartado'
    },
    automatic: {
      level: account,
      level2: createPocket,
      level3: '1 datos del apartado',
      type: '',
      step: 'aportaciones automaticas',
      applicationName: createPocket,
      productSubtype: 'cuentas con chequera'
    },
    percentage: {
      level: account,
      level2: 'apartado'
    },
    pageInfo: {
      [PAGE_PAGEINFO_PAGESEGMENT]: persons,
      [PAGE_PAGEINFO_AREA]: nonPublic,
      [PAGE_PAGEINFO_PROJECTNAME]: glomo
    }
  };

  const commonPageInfo = {
    [PAGE_PAGEINFO_PAGEINTENT]: transaction,
    [APPLICATION_FULLFILMENT]: online,
    [APPLICATION_APPLICATION_TYPE]: operative,
    ...operations.pageInfo
  };

  const funnel = (type) => {
    const operation = operations[type];
    return {
      ...commonPageInfo,
      [PAGE_PAGEINFO_LEVEL1]: operation.level,
      [APPLICATION_GLOBAL_APPLICATION]: `pockets${operation.type ? ` ${operation.type}` : ''}`,
      [APPLICATION_APPLICATION_NAME]: operation.applicationName,
      [PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account
    };
  };

  const getFootprint = (type, level3, level4, isInfo, isError) => {
    const operation = operations[type];
    return _setFeatureFlag(getAdvancedFootprint({
      ...operations.pageInfo,
      ...(operation.level ? { [PAGE_PAGEINFO_LEVEL1]: operation.level } : {}),
      ...(operation.level2 ? { [PAGE_PAGEINFO_LEVEL2]: operation.level2 } : {}),
      ...(level3 ? { [PAGE_PAGEINFO_LEVEL3]: level3 } : {}),
      ...(level4 ? { [PAGE_PAGEINFO_LEVEL4]: level4 } : {}),
      ...(isError ? {[PAGE_PAGEINFO_ERRORPAGE]: isError} : {}),
      [PAGE_PAGEINFO_PAGEINTENT]: isInfo ? information : transaction
    }));
  };

  const internalLink = (link, level1, level2) => _setInteractionFlag(getInternalLink(link, {
    ...commonPageInfo,
    ...(level1 ? { [PAGE_PAGEINFO_LEVEL1]: level1 } : {}),
    ...(level2 ? { [PAGE_PAGEINFO_LEVEL2]: level2 } : {})
  }));

  const interactionLink = (textInteractionName) => _setInteractionFlag(getInteractionLink(textInteractionName, {
    ...commonPageInfo
  }));

  const getAppOnClickStart = (type, step, level2) => {
    const operation = operations[type];
    return _setFeatureFlag(getOnClickStart(step ?? `${operation.startStep} apartado`, transaction, {
      ...funnel(type),
      [PAGE_PAGEINFO_LEVEL2]: level2 ?? (operation.level2 ? operation.level2 : {}),
      [APPLICATION_STEP]: step ?? `${operation.startStep} apartado`
    }));
  };

  const getPageVisit = (type, level2, level3) => {
    const operation = operations[type];
    return _setFeatureFlag(getPageVisitRaw({
      ...funnel(type),
      [APPLICATION_STEP]: level3,
      [PAGE_PAGEINFO_LEVEL2]: level2 ?? (operation.level2 ? operation.level2 : {}),
      ...(level3 ? { [PAGE_PAGEINFO_LEVEL3]: level3 } : {}),
      ...(operation.productSubtype ? { [PRODUCT_PRODUCT_SUBTYPE]: operation.productSubtype } : '')
    }));
  };

  const getAppStarted = (type, step) => {
    const operation = operations[type];
    return _setFeatureFlag(getAppStartedWithLevel2(operation.step, {
      ...funnel(type),
      [APPLICATION_STEP]: step ? step : operation.step,
      ...(operation.level2 ? { [PAGE_PAGEINFO_LEVEL2]: operation.level2 } : {}),
      ...(operation.level3 ? { [PAGE_PAGEINFO_LEVEL3]: operation.level3 } : {}),
      ...(operation.productSubtype ? { [PRODUCT_PRODUCT_SUBTYPE]: operation.productSubtype } : '')
    }));
  };

  const getAppCompleted = (type, level2, level3) => {
    const operation = operations[type];
    return _setFeatureFlag(getAppCompletedRaw({
      ...funnel(type),
      [APPLICATION_STATE]: approve,
      [PAGE_PAGEINFO_LEVEL2]: level2 ?? (operation.level2 ? operation.level2 : {}),
      [PAGE_PAGEINFO_LEVEL3]: level3 ?? successfulPage,
      [APPLICATION_STEP]: successfulPage,
      [PRODUCT_STATE]: approve,
      [PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amount'},
      [PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: MXN,
      ...(operation.productSubtype ? { [PRODUCT_PRODUCT_SUBTYPE]: operation.productSubtype } : '')
    }));
  };

  const appStep = (type, step, stepNumber) => {
    const operation = operations[type];
    return _setFeatureFlag(getAppStep(stepNumber, {
      ...funnel(type),
      [APPLICATION_STEP]: step,
      [PAGE_PAGEINFO_LEVEL3]: step,
      ...(operation.level2 ? { [PAGE_PAGEINFO_LEVEL2]: operation.level2 } : {}),
      ...(operation.productSubtype ? { [PRODUCT_PRODUCT_SUBTYPE]: operation.productSubtype } : '')
    }));
  };

  return {
    internalLink,
    interactionLink,
    getAppOnClickStart,
    getPageVisit,
    getAppStarted,
    getAppCompleted,
    appStep,
    getFootprint
  };
};
