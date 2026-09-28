import BbvaAggregationSimpleList from './bbva-aggregation-simple-list';

export default class BbvaAggregationSimpleListSpherica extends BbvaAggregationSimpleList {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-aggregation-simple-list-spherica',
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-aggregation-simple-list-spherica';
    }

}

