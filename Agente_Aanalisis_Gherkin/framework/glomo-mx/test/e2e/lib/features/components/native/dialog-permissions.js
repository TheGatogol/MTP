import {utils} from '@csqe/radish';

import AbstractGlomoComponent from '.././abstract-glomo-component';

export default class DialogPermissions extends AbstractGlomoComponent {
    constructor({args} = {}) {
        const defaultArgs = {
            name: 'dialog-permissions',
            elements: {
                elementRequired:{
                    ios: '//XCUIElementTypeButton',
                    android: '//android.widget.Button',
                },
                allowUseApp: {
                    ios: '//XCUIElementTypeButton[@name="Permitir al usarse la app"]',
                    android: '//android.widget.Button[@text="Mientras la app está en uso"]',
                },
                allowOnce: {
                    ios: '//XCUIElementTypeButton[@name="Permitir una vez"]',
                    android: '//android.widget.Button[@text="Solo esta vez"]',
                },
                allow: {
                    ios: '//XCUIElementTypeButton[@name="Permitir"]',
                    android: '//android.widget.Button[@text="Permitir"]',
                },
                notAllow: {
                    ios: '//XCUIElementTypeButton[@name="No permitir"]',
                    android: '//android.widget.Button[@text="No permitir"]',
                },
                deniesSendNotifications: {
                    ios: '//XCUIElementTypeButton[@name="Don’t Allow"]'
                },
            },
            requiredElements: [
                'elementRequired',
            ],
        };
        super(Object.assign(defaultArgs, args));
    }
    static get _baseRoot() {
        return 'dialog-permissions';
    }

    async _setPermissions({element, optional = false, timeout = config.wait.XXXL}) {
        await utils.runInContext({
            context: 'NATIVE_APP',
            action: async () => {
                if (await element.waitForDisplayed({timeout, failOnError: !optional})) {
                    await (await element
                        .waitForClickable({timeout}))
                        .click();
                }
            }
        });
    }

    async allowOncePermission({optional = false} = {}) {
        await this._setPermissions({element: this.allowOnce, optional});
    }

    async allowUseAppPermission({optional = false} = {}) {
        await this._setPermissions({element: this.allowUseApp, optional});
    }

    async allowPermission({optional = false} = {}) {
        await this._setPermissions({element: this.allow, optional});
    }

    async notAllowPermission({optional = false} = {}) {
        await this._setPermissions({element: this.notAllow, optional});
    }

    async deniesNotification({optional = false} = {}) {
        await this._setPermissions({element: this.deniesSendNotifications, optional});
    }
}
