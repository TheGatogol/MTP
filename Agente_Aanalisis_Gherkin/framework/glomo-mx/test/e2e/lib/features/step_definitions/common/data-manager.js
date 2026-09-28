import {Given} from '@cucumber/cucumber';

async function getDMEntryData(world, namespace, tags) {
    return (await world.dataManager.getSingleEntry({type: namespace(true), tags})).data;
}

Given('a(n) {datamanager} with the following criteria(:)', async function(datamanager, table) {
    const criteria = table.hashes().map(row => row.criteria);

    global[datamanager.varname()] = await getDMEntryData(this, datamanager.namespace, criteria);
    global[datamanager.varname()].__givenCriteria = criteria;
});

Given('another {datamanager} known as {string} with the following criteria(:)', async function(datamanager, alias, table) {
    const collection = datamanager.varname(true);
    if (!Object.prototype.hasOwnProperty.call(global, collection)) {
        global[collection] = {};
    } else if (Object.prototype.hasOwnProperty.call(global[collection], alias)) {
        logger.warn(`[WARNING] An entry of type ${collection} with the alias ${alias} already exists and will be overwritten.`);
    }

    const criteria = table.hashes().map(row => row.criteria);
    global[collection][alias] = await getDMEntryData(this, datamanager.namespace, criteria);
    global[collection][alias].__givenCriteria = criteria;
});
