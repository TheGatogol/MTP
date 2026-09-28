import AbstractGlomoNavigation from '../abstract-glomo-navigation';
class OcAccountYoungDigitalization extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocAccountYoungDigitalization/ocAccountYoungDigitalization', parentNavigation: 'dashboard'});
    }
}

export default new OcAccountYoungDigitalization();
