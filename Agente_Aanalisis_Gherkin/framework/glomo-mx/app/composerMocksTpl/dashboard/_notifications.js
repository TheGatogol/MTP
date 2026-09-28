const notificationsData = {
  frequentOperation: {
    className: 'card',
    iconSize: 24,
    icon: 'coronita:alarm',
    headingMessage: '',
    linkText: 'frequent-operations-transfer-link-text',
    altLinkText: 'frequent-operations-payment-link-text',
    page: 'ocFrequentOperationsTransfer'
  },
  multipleFrequentOperations: {
    className: 'card',
    iconSize: 24,
    icon: 'coronita:alarm',
    headingMessage: '',
    linkText: 'frequent-operations-see-operations-link-text',
    page: 'frequentOperationsList'
  },
  creditBureau: {
    className: 'card',
    iconSize: 24,
    icon: 'coronita:tasks',
    headingMessage: 'cells-notifications-credit-bureau-heading-message',
    message: 'cells-notifications-credit-bureau-message',
    linkText: 'cells-notifications-credit-bureau-link-text',
    page: 'historyCredit'
  },
  assistanceManager: {
    className: 'card',
    iconSize: 24,
    icon: 'coronita:myprofile',
    headingMessage: 'cells-notifications-assitance-manager-heading-message',
    message: 'cells-notifications-assitance-manager-message',
    linkText: 'cells-notifications-assitance-manager-link-text',
    page: 'assistanceManager'
  },
  notificationsSettings: {
    className: 'card',
    iconSize: 24,
    icon: 'coronita:email',
    headingMessage: 'cells-notifications-notifications-settings-heading-message',
    message: 'cells-notifications-notifications-settings-message',
    linkText: 'cells-notifications-notifications-settings-link-text'
  }
};

module.exports = {
  notificationsData
};
