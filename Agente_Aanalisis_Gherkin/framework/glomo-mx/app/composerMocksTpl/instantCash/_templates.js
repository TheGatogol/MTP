const { getAlertManagerTemplates, getLocaleNameForward } = require('../common/helpers/_utils');
const {
  ALERT_MANAGER_TEMPLATE_IDS: {
    OPERATION_NOT_PERFORMED_RETRY_MODAL_ID,
    OPERATION_NOT_PERFORMED_ERROR_MODAL_ID,
    INFORMATION_NOT_AVAILABLE_RETRY_MODAL_ID,
    INFORMATION_NOT_AVAILABLE_ERROR_MODAL_ID,
    CARD_ISSUES_ERROR_MODAL_ID, EXPIRED_CARD_ERROR_MODAL_ID,
    AMOUNT_EXCEEDS_DEPOSIT_LIMIT_ERROR_MODAL_ID,
    OFFER_TAKEN_ERROR_MODAL_ID,
    UNAVAILABLE_OFFER_ERROR_MODAL_ID,
    CAT_RATE_MODAL_ID, MONTHLY_RATE_MODAL_ID,
    ANNUAL_RATE_MODAL_ID, ANNUAL_RATE_BY_SIMULATION_MODAL_ID,
    TAXES_AND_COMMISSIONS_MODAL_ID, DISPOSITION_COMMISSION_MODAL_ID,
    CONFIRM_MODAL_ID
  }
} = require('./_literals');

function getModalTemplate(className = '', acceptBtLabel = null, cancelBtLabel = null, template = null, extraConfigProps = {}, extraRootProps = {}) {
  return {
    selectedConfig: {
      className,
      template,
      acceptBtLabel,
      cancelBtLabel,
      ...extraConfigProps
    },
    ...extraRootProps
  };
}

function getFullModal(className, headerTitle, template, acceptBtLabel, cancelBtLabel, extraConfigProps, extraRootProps) {
  const _extraConfigProps = {
    openMaximized: true,
    closeIcon: 'coronita:close',
    closeIconSize: 20,
    iconOnlyFullHeight: true,
    title: headerTitle,
    ...extraConfigProps
  };
  return getModalTemplate(className, acceptBtLabel, cancelBtLabel, template, _extraConfigProps, extraRootProps);
}

function getFullErrorModal(headerTitle, title, description, acceptBtLabel, cancelBtLabel, extraConfigProps, extraRootProps) {
  const template = {
    type: 'paragraphs',
    values: []
  };
  if (title) {
    template.values.push({text: title, class: 'strong'});
  }
  if (description) {
    template.values.push({text: description});
  }
  const _extraConfigProps = {
    heroImage: './images/errors/error.svg',
    ...extraConfigProps
  };
  return getFullModal('full-height-error close-button--right', headerTitle, template, acceptBtLabel, cancelBtLabel, _extraConfigProps, extraRootProps);
}

function getHalfModal(className, icon, title = null, description = null, acceptBtLabel, cancelBtLabel, extraConfigProps, extraRootProps) {
  const template = {
    type: 'paragraphs',
    values: [
      {icon, class: 'spacing'}
    ]
  };
  if (title) {
    template.values.push({text: title, class: 'strong'});
  }
  if (description) {
    template.values.push({text: description});
  }
  const _extraConfigProps = {
    openMaximized: false,
    iconOnlyFullHeight: true,
    ...extraConfigProps
  };
  return getModalTemplate(className, acceptBtLabel, cancelBtLabel, template, _extraConfigProps, extraRootProps);
}

function getHelpIconModal(title, description, acceptBtLabel, extraConfigProps, extraRootProps) {
  return getHalfModal('info', 'coronita:help', title, description, acceptBtLabel, null, extraConfigProps, extraRootProps);
}

function getHelpIconModalSpherica(title, message, subtitle = null, acceptBtLabel = null, extraConfigProps, extraRootProps) {
  return {
    selectedConfig: {
      className: 'info',
      acceptBtLabel,
      closeIconId: 'coronita:close',
      closeIconSize: 20,
      title,
      subtitle,
      iconOnlyFullHeight: false,
      openMaximized: false,
      message,
      template: {
        type: 'paragraphs',
        values: []
      },
      atomIcon: { icon: 'coronita:help', class: 'icon-size-80' },
      ...extraConfigProps
    },
    ...extraRootProps
  };
}

function getWarningModal(title, description, acceptBtLabel, cancelBtLabel, extraConfigProps, extraRootProps) {
  return getHalfModal('error', 'coronita:alert', title, description, acceptBtLabel, cancelBtLabel, extraConfigProps, extraRootProps);
}

module.exports = (pageConfig, pageName, isSpherica) => {
  const getLocaleName = getLocaleNameForward(pageName);
  const alertManagerTemplatesConfig = [
    {
      id: TAXES_AND_COMMISSIONS_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('taxes-and-commissions-modal-title'),
        getLocaleName('taxes-and-commissions-modal-description')
      ) : getHelpIconModal(
        getLocaleName('taxes-and-commissions-modal-title'),
        getLocaleName('taxes-and-commissions-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: CAT_RATE_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('cat-rate-modal-title'),
        getLocaleName('cat-rate-modal-description')
      ) : getHelpIconModal(
        getLocaleName('cat-rate-modal-title'),
        getLocaleName('cat-rate-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: MONTHLY_RATE_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('monthly-rate-modal-title'),
        getLocaleName('monthly-rate-modal-description')
      ) : getHelpIconModal(
        getLocaleName('monthly-rate-modal-title'),
        getLocaleName('monthly-rate-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: ANNUAL_RATE_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('annual-rate-modal-title'),
        getLocaleName('annual-rate-modal-description')
      ) : getHelpIconModal(
        getLocaleName('annual-rate-modal-title'),
        getLocaleName('annual-rate-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: ANNUAL_RATE_BY_SIMULATION_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('annual-rate-by-simulation-modal-title'),
        getLocaleName('annual-rate-by-simulation-modal-description')
      ) : getHelpIconModal(
        getLocaleName('annual-rate-by-simulation-modal-title'),
        getLocaleName('annual-rate-by-simulation-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: DISPOSITION_COMMISSION_MODAL_ID,
      template: isSpherica ? getHelpIconModalSpherica(
        getLocaleName('disposition-commission-modal-header'),
        getLocaleName('disposition-commission-modal-description'),
        getLocaleName('disposition-commission-modal-title'),
        null,
        { alertBoxVariant: 'primary-alt' }
      ) : getHelpIconModal(
        getLocaleName('disposition-commission-modal-title'),
        getLocaleName('disposition-commission-modal-description'),
        getLocaleName('help-modals-accept-button-label')
      )
    },
    {
      id: CONFIRM_MODAL_ID,
      template: getWarningModal(
        null,
        getLocaleName('confirm-modal-description'),
        getLocaleName('confirm-modal-accept-button-label'),
        getLocaleName('confirm-modal-cancel-button-label')
      )
    },
    {
      id: OPERATION_NOT_PERFORMED_RETRY_MODAL_ID,
      template: getWarningModal(
        getLocaleName('operation-not-performed-retry-modal-title'),
        getLocaleName('operation-not-performed-retry-modal-description'),
        getLocaleName('retry-modal-accept-button-label'),
        getLocaleName('retry-modal-cancel-button-label'),
        {noCancelOnOutsideClick: true}
      )
    },
    {
      id: OPERATION_NOT_PERFORMED_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('operation-not-performed-error-modal-title'),
        getLocaleName('operation-not-performed-error-modal-description'),
        getLocaleName('error-modal-accept-button-label'),
        getLocaleName('error-modal-cancel-button-label')
      )
    },
    {
      id: INFORMATION_NOT_AVAILABLE_RETRY_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('information-not-available-retry-modal-title'),
        getLocaleName('information-not-available-retry-modal-description'),
        getLocaleName('retry-modal-accept-button-label'),
        getLocaleName('retry-modal-cancel-button-label')
      )
    },
    {
      id: INFORMATION_NOT_AVAILABLE_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('information-not-available-error-modal-title'),
        getLocaleName('information-not-available-error-modal-description'),
        getLocaleName('error-modal-accept-button-label'),
        getLocaleName('error-modal-cancel-button-label')
      )
    },
    {
      id: CARD_ISSUES_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('card-issues-error-modal-title'),
        getLocaleName('card-issues-error-modal-description'),
        getLocaleName('error-modal-button-label')
      )
    },
    {
      id: EXPIRED_CARD_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('expired-card-error-modal-title'),
        getLocaleName('expired-card-error-modal-description'),
        getLocaleName('error-modal-button-label')
      )
    },
    {
      id: AMOUNT_EXCEEDS_DEPOSIT_LIMIT_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('amount-exceeds-deposit-limit-error-modal-title'),
        getLocaleName('amount-exceeds-deposit-limit-error-modal-description'),
        getLocaleName('error-modal-button-label')
      )
    },
    {
      id: OFFER_TAKEN_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('offer-taken-error-modal-title'),
        getLocaleName('offer-taken-error-modal-description'),
        getLocaleName('error-modal-button-label')
      )
    },
    {
      id: UNAVAILABLE_OFFER_ERROR_MODAL_ID,
      template: getFullErrorModal(
        getLocaleName('header-title'),
        getLocaleName('unavailable-offer-error-modal-title'),
        getLocaleName('unavailable-offer-error-modal-description'),
        getLocaleName('error-modal-button-label')
      )
    }
  ];

  const alertManagerTemplates = getAlertManagerTemplates(alertManagerTemplatesConfig, pageConfig, pageName);
  return {
    alertManagerTemplates
  };
};
