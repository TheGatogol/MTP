import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class CodiQrRequestSteps extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiQrRequestSteps'});
    }
}

export default new CodiQrRequestSteps();
