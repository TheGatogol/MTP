import {AbstractPerformanceAssertion}
    from '@csqe/radish';

export default class MinimumNetworkRequests extends AbstractPerformanceAssertion {

    /**
     * These areguments represent the tag used to identify this assertion, and its default treshold.
     */
    constructor() {
        super('@profiterole-timeline-minimum-network-requests', 50);
    }

    /**
     * Identifier used on our gherkin to specify that we want to use this assertion. Always on lower case.
     * @returns {string}
     */
    get identifier() {
        return 'minimum network requests';
    }

    /**
     * Assertion to perform at the end of timeline (and scenario execution).
     */
    assert() {
        // Threshold processed in milliseconds
        if (typeof this._threshold === 'string') {
            this._threshold = parseInt(this._threshold);
        }
        const networkRequests = this._model.timelineModel().networkRequests().length;
        expect(networkRequests, 'too few requests detected').to.be.at.least(this._threshold);
    }
}
