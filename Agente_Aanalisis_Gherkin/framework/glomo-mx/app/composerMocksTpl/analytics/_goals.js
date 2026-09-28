module.exports = () => {
  const goalsFeatureFlag = 'pfm.goals';
  const goalsFunnelFlag = 'pfm.goalsFunnel';
  const constants = require('./common/_constants');
  const { commons: { private: nonPublic, information, persons, online, account, savingAccounts, ended, successfulPage, saveDataError },
    sections: { pfm }, currencies, applicationName: { selfManagement }
  } = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getPageVisitRaw,
    getAppStartedWithoutLevel,
    getAppStep, getAppCompletedRaw,
    getAdvancedFootprint,
    getAdvancedFootprintError,
    getInteractionLink
  } = require('./common/_utils');
  const _setFeatureFlag = (flag, ...data) => getAnalyticFeatureFlag(flag, ...data);
  const getCommonData = level2 => ({
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'mis metas',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: pfm,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2
  });
  const getCommonFunnelData = (level2, appStep, typology) => ({
    ...getCommonData(level2),
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'create a goal',
    [constants.APPLICATION_APPLICATION_NAME]: 'crear mi meta',
    [constants.APPLICATION_APPLICATION_TYPE]: selfManagement,
    [constants.APPLICATION_FULLFILMENT]: online,
    [constants.APPLICATION_STEP]: appStep,
    [constants.APPLICATION_TYPOLOGY]: typology
  });
  const getCommonAppStepData = (proccess, offer, amount, paymentAmount, paymentType) => ({
    [constants.APPLICATION_PROCESS]: proccess,
    [constants.APPLICATION_OFFER]: offer,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: amount,
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: paymentAmount,
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: paymentType
  });
  const appOnClickStart = _setFeatureFlag(
    goalsFunnelFlag,
    getOnClickStart('', '',
      getCommonFunnelData({ bind: 'level2'}, { bind: 'step' }, { bind: 'typology' })
    )
  );
  const appPageVisit = _setFeatureFlag(
    goalsFunnelFlag,
    getPageVisitRaw(
      getCommonFunnelData({ bind: 'step' }, { bind: 'step' }, { bind: 'typology' })
    )
  );
  const appStarted = _setFeatureFlag(
    goalsFunnelFlag,
    getAppStartedWithoutLevel(
      getCommonFunnelData({ bind: 'level2' }, { bind: 'step' }, { bind: 'typology' })
    )
  );
  const appStep = number => {
    const attributes = number === '4' ? {
      [constants.PRODUCT_CURRENCY]: currencies.MXN,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: savingAccounts
    } : {};
    return _setFeatureFlag(
      goalsFunnelFlag,
      getAppStep(
        number,
        {
          ...getCommonFunnelData({ bind: 'level2' }, { bind: 'step' }, { bind: 'typology'}),
          ...getCommonAppStepData({ bind: 'process' }, { bind: 'offer'}, { bind: 'amount' }, { bind: 'paymentAmount' }, { bind: 'paymentType' }),
          ...attributes
        }
      )
    );
  };
  const appCompleted = _setFeatureFlag(
    goalsFunnelFlag,
    getAppCompletedRaw(
      getCommonFunnelData(
        successfulPage, successfulPage, { bind: 'typology' }
      ),
      {
        ...getCommonAppStepData({ bind: 'process' }, { bind: 'offer'}, { bind: 'amount' }, { bind: 'paymentAmount' }, { bind: 'paymentType' }),
        [constants.PRODUCT_CURRENCY]: currencies.MXN,
        [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account,
        [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: savingAccounts,
        [constants.APPLICATION_STATE]: ended,
        [constants.PRODUCT_STATE]: ended
      }
    )
  );
  const _getFootprintWithFlag = (level2, ...data) => _setFeatureFlag(goalsFeatureFlag, getAdvancedFootprint(getCommonData(level2), ...data));
  const getFootprint = (param, level2, level3, level4, customFields) => {
    const typeFootprint = {
      common: _getFootprintWithFlag(level2),
      saveError: _setFeatureFlag(goalsFeatureFlag, getAdvancedFootprintError(saveDataError, getCommonData(level2))),
      withLevel3: _getFootprintWithFlag(level2, {
        [constants.PAGE_PAGEINFO_LEVEL3]: level3
      }),
      withDynamicLevel3: _getFootprintWithFlag(level2, {
        [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
      }),
      withLevel4DynamicCustomFields: _getFootprintWithFlag(level2, {
        [constants.PAGE_PAGEINFO_LEVEL3]: level3,
        [constants.PAGE_PAGEINFO_LEVEL4]: level4,
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
      }),
      withLevel4CustomFields: _getFootprintWithFlag(level2, {
        [constants.PAGE_PAGEINFO_LEVEL3]: level3,
        [constants.PAGE_PAGEINFO_LEVEL4]: level4,
        [constants.APPLICATION_CUSTOM_FIELDS]: customFields
      }),
      withDynamicLevel3CustomFields: _getFootprintWithFlag(level2, {
        [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
        [constants.PAGE_PAGEINFO_LEVEL4]: successfulPage,
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
      })
    };
    return typeFootprint[param];
  };
  const getInteraction = _setFeatureFlag(
    goalsFeatureFlag,
    getInteractionLink({ bind: 'interactionLevel' }, getCommonData({ bind: 'level2' })));
  return {
    getFootprint,
    appStep,
    appOnClickStart,
    appPageVisit,
    appStarted,
    appCompleted,
    getInteraction
  };
};
