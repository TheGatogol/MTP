import {AbstractNavigation} from '@csqe/radish';

/**
 * @abstract
 */
export default class AbstractGlomoNavigation extends AbstractNavigation {
    constructor({page, parentNavigation, ...args}) {
        super({
            page: typeof page === 'string' ? require(`../pages/${page}`).default : page,
            parentNavigation: parentNavigation && typeof parentNavigation === 'string' ? require(`./${parentNavigation}`).default : parentNavigation,
            ...args
        });

        if (this.constructor === AbstractGlomoNavigation) {
            throw new TypeError('Abstract class "AbstractGlomoNavigation" cannot be instantiated directly.');
        }
    }
}
