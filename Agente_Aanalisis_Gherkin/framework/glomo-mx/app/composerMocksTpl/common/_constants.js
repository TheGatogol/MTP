const QR_READER_SCREEN_CONFIG = {
  sidebar: {
    tabbarButton: '',
    closeButtonHeader: 'dashboard',
    rightIconAction: 'mobileTransferPeerToPeerQROnboarding',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-mobile-transfer-peer-to-peer-qr-scan-header-title',
      navBarInfoButton: true,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: 'coronita:help',
      headerRightSecondaryIconAction: 'click-secondary-icon',
      headerTitleName: 'glomo-mobile-transfer-peer-to-peer-qr-scan-header-title',
      headerContinue: 'dashboard',
      qrReader: {
        hideGalleryButton: false,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: {
          label: 'glomo-mobile-transfer-peer-to-peer-qr-scan-reader-button-title',
          id: 'plin',
          icon: 'coronita:qr'
        }
      }
    }
  },
  cleanCardOperations: {
    tabbarButton: '',
    closeButtonHeader: 'cleanCardOperations',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-gp2-qr-reader-header-title',
      navBarInfoButton: true,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-gp2-qr-reader-header-title',
      headerContinue: 'cleanCardOperations',
      qrReader: {
        hideGalleryButton: true,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: null
      }
    }
  },
  cardlessWithdrawalReview: {
    tabbarButton: '',
    closeButtonHeader: 'cardlessWithdrawal',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-cardless-withdrawal-header-title',
      navBarInfoButton: false,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-cardless-withdrawal-header-title',
      headerContinue: 'cardlessWithdrawalReview',
      qrReader: {
        hideGalleryButton: false,
        targetPath: 'images/qr/scanner.svg',
        targetMessage: 'glomo-cardless-withdrawal-qr-target-message',
        primaryButton: null
      }
    }
  },
  cardlessWithdrawalDetail: {
    tabbarButton: '',
    closeButtonHeader: 'cardlessWithdrawalDetail',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-gp2-qr-reader-header-title',
      navBarInfoButton: false,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-gp2-qr-reader-header-title',
      headerContinue: 'cardlessWithdrawalDetail',
      qrReader: {
        hideGalleryButton: true,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: null
      }
    }
  },
  digitalActivation: {
    tabbarButton: '',
    closeButtonHeader: 'digitalActivation',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-gp2-qr-reader-header-title',
      navBarInfoButton: true,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-gp2-qr-reader-header-title',
      headerContinue: 'digitalActivation',
      qrReader: {
        hideGalleryButton: true,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: null
      }
    }
  }
};

module.exports = {
  QR_READER_SCREEN_CONFIG
};
