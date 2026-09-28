const RETRY_ERRORS_CONFIG_ALERT_MANAGER = {
  operative: {
    retryConfig: {
      acceptBtLabel: 'alert-generic-error-retry',
      cancelBtLabel: 'glomo-standard-error-handler-exit',
      message: 'glomo-standard-error-handler-operative-message',
      messageClass: 'grey',
      title: 'glomo-standard-error-handler-operative-title'
    },
    callConfig: {
      acceptBtLabel: 'alert-generic-error-exit',
      message: 'glomo-standard-error-handler-operative-message',
      messageClass: 'grey',
      title: 'glomo-standard-error-handler-operative-title'
    }
  },
  simulation: {
    callConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-call-btn',
      cancelBtLabel: 'glomo-standard-error-handler-exit',
      message: 'glomo-standard-error-handler-simulation-call-message',
      title: 'glomo-standard-error-handler-simulation-title',
      fullModal: true,
      className: 'full-height-error wearables-settings-alert-confirm'
    }
  },
  informationNotLoaded: {
    retryConfig: {
      acceptBtLabel: 'alert-generic-error-retry',
      cancelBtLabel: 'glomo-standard-error-handler-exit',
      title: 'glomo-standard-error-handler-information-not-loaded-message-title',
      fullModal: true,
      className: 'full-height-error',
      srcImage: './images/errors/error.svg',
      message: 'glomo-standard-error-handler-information-not-loaded-retry-message'
    },
    callConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-call-btn',
      cancelBtLabel: 'glomo-standard-error-handler-exit',
      title: 'glomo-standard-error-handler-information-not-loaded-message-title',
      fullModal: true,
      className: 'full-height-error',
      srcImage: './images/errors/error.svg',
      message: 'glomo-standard-error-handler-information-not-loaded-retry-message'
    }
  },
  productDetailMoreInfo: {
    retryConfig: {
      acceptBtLabel: 'alert-generic-error-retry',
      cancelBtLabel: 'glomo-standard-error-handler-go-back',
      title: 'glomo-standard-error-handler-information-not-loaded-message-title',
      fullModal: true,
      className: 'error dark-header header-button-to-left',
      closeIcon: 'coronita:return-12',
      srcImage: './images/errors/error.svg',
      message: 'glomo-standard-error-handler-information-not-loaded-retry-message'
    },
    callConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-call-bbva-investment-btn',
      cancelBtLabel: 'glomo-standard-error-handler-go-back',
      title: 'glomo-standard-error-handler-information-not-loaded-message-title',
      fullModal: true,
      className: 'error dark-header header-button-to-left',
      closeIcon: 'coronita:return-12',
      srcImage: './images/errors/error.svg',
      message: 'glomo-standard-error-handler-information-not-loaded-retry-call-bbva-message'
    }
  },
  unfinishedOperations: {
    retryConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-retry-error',
      cancelBtLabel: 'glomo-standard-error-handler-go-back',
      title: 'glomo-standard-error-handler-operation-not-done-message-title',
      fullModal: false,
      className: 'error',
      srcImage: './images/micro-error.svg',
      message: 'glomo-standard-error-handler-operation-not-done-retry-message'
    },
    callConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-retry-later-exit',
      title: 'glomo-standard-error-handler-operation-not-done-retry-later-error-title',
      fullModal: false,
      className: 'error',
      srcImage: './images/micro-error.svg',
      message: 'glomo-standard-error-handler-operation-not-done-retry-later-error-message'
    }
  },
  otherNotClasifiedErrors: {
    retryConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-retry-error',
      cancelBtLabel: 'glomo-standard-error-handler-go-back',
      title: 'glomo-standard-error-handler-title',
      fullModal: false,
      className: 'error',
      srcImage: './images/micro-error.svg',
      message: 'glomo-standard-error-handler-message'
    },
    callConfig: {
      acceptBtLabel: 'glomo-standard-error-handler-retry-later-exit',
      title: 'glomo-standard-error-handler-title',
      fullModal: false,
      className: 'error',
      srcImage: './images/micro-error.svg',
      message: 'glomo-standard-error-handler-retry-later-message'
    }
  }
};

module.exports = {
  RETRY_ERRORS_CONFIG_ALERT_MANAGER
};
