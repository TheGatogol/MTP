module.exports = () => {
  const {
    PAGE_PAGEINFO_PAGESEGMENT,
    PAGE_PAGEINFO_AREA,
    PAGE_PAGEINFO_PROJECTNAME,
    PAGE_PAGEINFO_LEVEL1,
    USER_USERSTATE,
    APPLICATION_APPLICATION_NAME,
    APPLICATION_APPLICATION_TYPE,
    APPLICATION_GLOBAL_APPLICATION,
    APPLICATION_STEP,
    PAGE_PAGEINFO_PAGEINTENT,
    APPLICATION_PROCESS,
    APPLICATION_TYPOLOGY,
    PAGE_PAGEINFO_LEVEL2,
    PRODUCT_ATTRIBUTES_PRODUCT_NAME,
    PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY,
    APPLICATION_CUSTOM_FIELDS,
    PRODUCT_CURRENCY,
    PRODUCT_AMOUNT,
    APPLICATION_FULLFILMENT
  } = require('./common/_constants');
  const {
    commons: {
      information,
      signToken,
      private: privateArea,
      persons,
      logado,
      operative,
      account,
      detail,
      transaction,
      successfulPage,
      onboarding,
      paymentOption,
      modify,
      global_position: globalPosition,
      outstanding
    },
    actions: { online },
    sections: { glomo },
    applicationName: { mobileTopUp },
    globalApplication: { mobileTopUp: globalApplication },
    expensesGroup: { operatives },
    mobilePayments: { operationError }
  } = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getPageVisit,
    getAppStep,
    getOnClickStart,
    getAppOnClickStartLevel2,
    getAppStartedWithLevel2,
    getAppCompletedLevel2,
    getAppOnClickStartLevel3,
    getInternalLinkWithLevel2,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintErrorLevel2
  } = require('./common/_utils');

  const FEATURE_FLAG = 'mobileTopUpPackages';

  const getAppStepLevelAndIntentData = (level = '', intent = '', data) => ({
    [PAGE_PAGEINFO_PAGEINTENT]: intent,
    [APPLICATION_STEP]: level,
    [PAGE_PAGEINFO_LEVEL2]: level,
    ...data
  });

  const getLevel1AndIntentData = (data, level = '', intent = '') => ({
    [PAGE_PAGEINFO_PAGEINTENT]: intent,
    [PAGE_PAGEINFO_LEVEL1]: level,
    ...data
  });

  const getCustomAplicationCustomFields = (data, customField = '', level1 = '') => ({
    [APPLICATION_CUSTOM_FIELDS]: customField,
    [PAGE_PAGEINFO_LEVEL1]: level1,
    ...data
  });

  const getIntentAndAppStep = (data, intent = '', appStep = '', level1 = '') => ({
    [PAGE_PAGEINFO_PAGEINTENT]: intent,
    [APPLICATION_STEP]: appStep,
    [PAGE_PAGEINFO_LEVEL1]: level1,
    ...data
  });

  const common = {
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_AREA]: privateArea,
    [PAGE_PAGEINFO_PROJECTNAME]: glomo,
    [USER_USERSTATE]: logado,
    [APPLICATION_FULLFILMENT]: online
  };

  const commonFunnel = {
    [APPLICATION_APPLICATION_NAME]: mobileTopUp,
    [APPLICATION_APPLICATION_TYPE]: operative,
    [APPLICATION_GLOBAL_APPLICATION]: globalApplication,
    ...common
  };

  const proccessTypology = {
    [APPLICATION_PROCESS]: { bind: 'offerType' },
    [APPLICATION_TYPOLOGY]: { bind: 'providerName' },
    [PAGE_PAGEINFO_LEVEL1]: mobileTopUp,
    ...commonFunnel
  };

  const productsAttributes = {
    [PRODUCT_AMOUNT]: { bind: 'amount' },
    [PRODUCT_CURRENCY]: { bind: 'currency' },
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    ...proccessTypology
  };

  return {
    app_on_click_start_dashboard: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getOnClickStart(`${mobileTopUp} ${operatives}`, information, getLevel1AndIntentData(commonFunnel, operatives, information))
    ),
    app_on_click_start_recharge_section: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getOnClickStart(mobileTopUp, information, getLevel1AndIntentData(commonFunnel, 'bbvaplus', information))
    ),
    app_on_click_start_product_detail: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppOnClickStartLevel3(
        account,
        detail,
        operatives,
        getIntentAndAppStep(commonFunnel, information, `${mobileTopUp} ${account} ${detail} ${operatives}`)
      )
    ),
    app_page_visit: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getPageVisit('1 numero celular', getLevel1AndIntentData(commonFunnel, mobileTopUp, transaction))
    ),
    app_started_contact: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppStartedWithLevel2('1 numero celular', getIntentAndAppStep(commonFunnel, transaction, { bind: 'contactType' }, mobileTopUp))
    ),
    app_step_offers: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppStep(
        2,
        getAppStepLevelAndIntentData(
          '2 recarga',
          transaction,
          proccessTypology
        )
      )
    ),
    app_step_confirmation: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppStep(
        3,
        getAppStepLevelAndIntentData(
          '3 confirmacion',
          transaction,
          productsAttributes
        )
      )
    ),
    app_step_sign: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppStep(
        4,
        getAppStepLevelAndIntentData(
          '4 otp',
          transaction,
          getCustomAplicationCustomFields(productsAttributes, signToken)
        )
      )
    ),
    app_completed: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAppCompletedLevel2(
        successfulPage,
        { bind: 'status' },
        getIntentAndAppStep(
          getCustomAplicationCustomFields(productsAttributes, signToken),
          transaction
        )
      )
    ),
    internal_link_not_save_contact: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getInternalLinkWithLevel2(
        'continuar',
        '1 numero celular',
        getCustomAplicationCustomFields(
          getLevel1AndIntentData(common, mobileTopUp, transaction),
          { bind: 'save' }
        )
      )
    ),
    internal_link_save_contact: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getInternalLinkWithLevel2(
        'continuar',
        '1 numero celular',
        getCustomAplicationCustomFields(
          getLevel1AndIntentData(common, mobileTopUp, transaction),
          { bind: 'save' }
        )
      )
    ),
    page_view_onboarding: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        onboarding,
        getIntentAndAppStep(common, information, '', mobileTopUp)
      )
    ),
    page_view_packages_information: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        'terminos y condiciones',
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_payment_method: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        paymentOption,
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_modify_step: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        modify,
        getIntentAndAppStep(
          getCustomAplicationCustomFields(
            common,
            { bind: 'step'},
            mobileTopUp
          ),
          transaction
        )
      )
    ),
    page_view_exit: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        'salir',
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_delete_contact: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        'eliminar contacto',
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_operation_not_realized: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        operationError,
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_contact_without_save: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        'error contacto sin guardar',
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_error_limit_daily: getAnalyticFeatureFlagError(
      FEATURE_FLAG,
      getAdvancedFootprintErrorLevel2(
        mobileTopUp,
        'error limite diario excedido',
        getIntentAndAppStep(common, transaction)
      )
    ),
    page_view_error_limit_monthly: getAnalyticFeatureFlagError(
      FEATURE_FLAG,
      getAdvancedFootprintErrorLevel2(
        mobileTopUp,
        'error limite mensual excedido',
        getIntentAndAppStep(common, transaction)
      )
    ),
    page_view_activate_native_contacts_access: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        'activar acceso a contactos',
        getIntentAndAppStep(common, transaction, '', mobileTopUp)
      )
    ),
    page_view_saved_contact_save: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        '1 numero celular',
        getIntentAndAppStep(
          getCustomAplicationCustomFields(
            common,
            { bind: 'save' },
            mobileTopUp
          ),
          transaction
        )
      )
    ),
    page_view_saved_contact_not_save: getAnalyticFeatureFlag(
      FEATURE_FLAG,
      getAdvancedFootprintWithLevel2(
        '1 numero celular',
        getIntentAndAppStep(
          getCustomAplicationCustomFields(
            common,
            { bind: 'save' },
            mobileTopUp
          ),
          transaction
        )
      )
    )
  };
};
