import {Element, utils} from '@csqe/radish';

const DETAIL_VALUE_ERR = (detail) => `Error, the ${detail} is not the expected one`;

export const keyValueElement = {
    key: '.key span',
    textValue: '.value .value-item span',
    amountValue: '.value .value-item-0 cells-atom-amount span.integer:not([hidden])',
    amountCurrencyValue: '.value .value-item-0 cells-atom-amount span.currency:not([hidden])',
};

export async function validateKeyValue(parentSelector, key, valueToCheck, keySelector, valueSelector) {
    const parentElement = await parentSelector.filter.childWithText({
        text: key,
        childSelector: keySelector || this.keyValueElement.key,
    });
    await utils.verifyValueOrWaitForVisible({
        element: new Element({
            selector: ((await ((await parentElement[0].selectedBy(valueSelector || this.keyValueElement.textValue)).elements()))).value,
        }),
        value: valueToCheck,
    });
}

export async function validateAmountKeyValue(parentSelector, key, valueToCheck, keySelector, amountValueSelector = {}) {
    const parentElement = await parentSelector.filter.childWithText({
        text: key,
        childSelector: keySelector || this.keyValueElement.key,
    });
    await utils.verifyValueOrWaitForVisible({
        element: new Element({
            selector: ((await ((await parentElement[0].selectedBy(amountValueSelector.amount || this.keyValueElement.amountValue)).elements()))).value,
        }),
        value: valueToCheck.amount,
    });
    if (valueToCheck.currency) {
        await utils.verifyValueOrWaitForVisible({
            element: new Element({
                selector: ((await ((await parentElement[0]
                    .selectedBy(amountValueSelector.currency || this.keyValueElement.amountCurrencyValue))
                    .elements())))
                    .value,
            }),
            value: valueToCheck.currency,
        });
    }
}

export async function validateDetail(detail, expectedValue, detailErrorStr) {
    await detail.scrollIntoView({block: 'start'});
    await detail.verifyValue(expectedValue, DETAIL_VALUE_ERR(detailErrorStr));
}

