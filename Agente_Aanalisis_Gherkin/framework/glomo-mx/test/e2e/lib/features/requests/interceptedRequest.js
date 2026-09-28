import {
    AbstractRequest,
    HeaderValidationNotFound,
} from '@csqe/radish';

export default class InterceptedRequest extends AbstractRequest{
    get _requestsData() {
        return {
            'credit card payment own transfer voucher': {
                requestUrl: 'transfers/v0/own-transfers',
                requestMethod: 'POST',
                schema: 'requests/transfers_v0_own_transfers'
            }
        };
    }

    async _headerValidation({item, type, ...args} = {}) {
        switch(type.toLowerCase()) {
            case 'not present':
                await expect(this.headers).to.eventually.not.have.property(item);
                break;
            case 'present':
                await expect(this.headers).to.eventually.have.property(item);
                break;
            default:
                throw new HeaderValidationNotFound({item, args});
        }
    }
}
