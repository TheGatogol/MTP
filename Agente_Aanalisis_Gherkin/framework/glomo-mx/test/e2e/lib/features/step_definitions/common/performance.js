import {Given} from '@cucumber/cucumber';
import path from 'path';
import {Commands, PerformanceAssertionBuilder} from '@csqe/radish';
const assertionBuilder = new PerformanceAssertionBuilder(path.join(__dirname, '../../performance_assertions'));

const MISSING_TAG_ERROR = '[Performance] Executed performance step without @performance tag.';

Given('the user starts the performance test', async function() {
    if(global.scenario.pickle.tags.filter(t => t.name === '@performance').length === 0){
        throw new Error(MISSING_TAG_ERROR);
    }
    if (Commands.flags.isPerformance) {
        assertionBuilder.startPerformanceTest();
    }
});

Given('the user starts the performance test with the following assertions:', async function(table) {
    if(global.scenario.pickle.tags.filter(t => t.name === '@performance').length === 0){
        throw new Error(MISSING_TAG_ERROR);
    }
    if (Commands.flags.isPerformance) {
        for (const {assertion, threshold} of table.hashes()) {
            assertionBuilder.buildAssertionTag(assertion, threshold);
            assertionBuilder.startPerformanceTest();
            assertionBuilder.loadAssertions();
        }
    }
});
