import {
    AbstractDevice,
    BrowserVariableValidationKeyNotFound,
    BrowserVariableValidationTypeNotFound,
    utils
} from '@csqe/radish';

/**
 * GloMo Device class, to handle actions related with a device instead of an specific page.
 */
export default class GlomoDevice extends AbstractDevice {
    constructor() {
        super({
            variables: {
                analytics: {
                    __prefix: 'window.digitalData',
                    analytics: { alias: ['analytics'], path: '' },
                    versionDL: { alias: ['version DL'], path: 'versionDL' },
                    pageInstanceID: { alias: ['page instance ID'], path: 'pageInstanceID' },

                    // digitalData.page.pageInfo
                    pageIntent: { alias: ['page intent'], path: 'page.pageInfo.pageIntent' },
                    pageSegment: { alias: ['page segment'], path: 'page.pageInfo.pageSegment' },
                    pageName: { alias: ['page name'], path: 'page.pageInfo.pageName' },
                    sysEnv: { alias: ['sysEnv'], path: 'page.pageInfo.sysEnv' },
                    channel: { alias: ['channel'], path: 'page.pageInfo.channel' },
                    language: { alias: ['language'], path: 'page.pageInfo.language' },
                    level1: { alias: ['level 1'], path: 'page.pageInfo.level1' },
                    level2: { alias: ['level 2'], path: 'page.pageInfo.level2' },
                    level3: { alias: ['level 3'], path: 'page.pageInfo.level3' },
                    level4: { alias: ['level 4'], path: 'page.pageInfo.level4' },
                    level5: { alias: ['level 5'], path: 'page.pageInfo.level5' },
                    level6: { alias: ['level 6'], path: 'page.pageInfo.level6' },
                    level7: { alias: ['level 7'], path: 'page.pageInfo.level7' },
                    level8: { alias: ['level 8'], path: 'page.pageInfo.level8' },
                    level9: { alias: ['level 9'], path: 'page.pageInfo.level9' },
                    level10: { alias: ['level 10'], path: 'page.pageInfo.level10' },
                    businessUnit: { alias: ['business unit'], path: 'page.pageInfo.businessUnit' },
                    siteAppName: { alias: ['site app name'], path: 'page.pageInfo.siteAppName' },
                    projectName: { alias: ['project name'], path: 'page.pageInfo.projectName' },
                    errorPage: { alias: ['error page'], path: 'page.pageInfo.errorPage' },
                    version: { alias: ['page info version'], path: 'page.pageInfo.version' },
                    pageArea: { alias: ['page area'], path: 'page.pageInfo.area' },

                    // digitalData.page.pageActivity
                    loginType: { alias: ['login type'], path: 'page.pageActivity.loginType' },
                    onSiteSearchResults: { alias: ['on site search result'], path: 'page.pageActivity.search.onSiteSearchResults' },
                    onSiteSearchTerm: { alias: ['on site search term'], path: 'page.pageActivity.search.onSiteSearchTerm' },
                    onSiteSearchEnterTerm: { alias: ['on site search enter term'], path: 'page.pageActivity.search.onSiteSearchEnterTerm' },
                    pageActivityName: { alias: ['link name'], path: 'page.pageActivity.link.name' },
                    pageActivityUrl: { alias: ['link url'], path: 'page.pageActivity.link.url' },
                    pageActivityExt: { alias: ['link ext'], path: 'page.pageActivity.link.ext' },
                    pageActivityAux1: { alias: ['link aux1'], path: 'page.pageActivity.link.aux1' },
                    pageActivityAux2: { alias: ['link aux2'], path: 'page.pageActivity.link.aux2' },
                    pageActivityAux3: { alias: ['link aux3'], path: 'page.pageActivity.link.aux3' },

                    // digitalData.optimization
                    optimizationAttributes: { alias: ['optimization attributes'], path: 'optimization.attributes' },
                    optimizationAttributesId: { alias: ['optimization attributes id'], path: 'optimization.attributes[0].location' },
                    optimizationEventName: { alias: ['optimization event name'], path: 'optimization.event.eventName' },
                    optimizationEvent: { alias: ['optimization event'], path: 'optimization.event.optimizationEvent' },

                    // digitalData.internalCampaign
                    internalCampaignAttributes: { alias: ['internal campaign', 'internal campaign attributes'], path: 'internalCampaign.attributes' },
                    internalCampaignLocationOne: { alias: ['internal campaign attributes location 1'], path: 'internalCampaign.attributes[1].location' },
                    internalCampaignLocationTwo: { alias: ['internal campaign attributes location 2'], path: 'internalCampaign.attributes[2].location' },
                    internalCampaignLocationThree: { alias: ['internal campaign attributes location 3'], path: 'internalCampaign.attributes[3].location' },
                    internalCampaignLocationFour: { alias: ['internal campaign attributes location 4'], path: 'internalCampaign.attributes[4].location' },
                    internalCampaignLocationFive: { alias: ['internal campaign attributes location 5'], path: 'internalCampaign.attributes[5].location' },
                    internalCampaignLocationSix: { alias: ['internal campaign attributes location 6'], path: 'internalCampaign.attributes[6].location' },
                    internalCampaignLocationSeven: { alias: ['internal campaign attributes location 7'], path: 'internalCampaign.attributes[7].location' },
                    internalCampaignLocationEight: { alias: ['internal campaign attributes location 8'], path: 'internalCampaign.attributes[8].location' },
                    internalCampaignLocationNine: { alias: ['internal campaign attributes location 9'], path: 'internalCampaign.attributes[9].location' },
                    internalCampaignLocationTen: { alias: ['internal campaign attributes location 10'], path: 'internalCampaign.attributes[10].location' },
                    internalCampaignLocationEleven: { alias: ['internal campaign attributes location 11'], path: 'internalCampaign.attributes[11].location' },
                    internalCampaignLocationTwelve: { alias: ['internal campaign attributes location 12'], path: 'internalCampaign.attributes[12].location' },
                    internalCampaignLocationThirteen: { alias: ['internal campaign attributes location 13'], path: 'internalCampaign.attributes[13].location' },
                    internalCampaignCampaignFormatOne: { alias: ['internal campaign attributes campaign format 1'], path: 'internalCampaign.attributes[1].campaignFormat' },
                    internalCampaignCampaignFormatTwo: { alias: ['internal campaign attributes campaign format 2'], path: 'internalCampaign.attributes[2].campaignFormat' },
                    internalCampaignCampaignFormatThree: { alias: ['internal campaign attributes campaign format 3'], path: 'internalCampaign.attributes[3].campaignFormat' },
                    internalCampaignCampaignFormatFour: { alias: ['internal campaign attributes campaign format 4'], path: 'internalCampaign.attributes[4].campaignFormat' },
                    internalCampaignCampaignFormatFive: { alias: ['internal campaign attributes campaign format 5'], path: 'internalCampaign.attributes[5].campaignFormat' },
                    internalCampaignCampaignFormatSix: { alias: ['internal campaign attributes campaign format 6'], path: 'internalCampaign.attributes[6].campaignFormat' },
                    internalCampaignCampaignFormatSeven: { alias: ['internal campaign attributes campaign format 7'], path: 'internalCampaign.attributes[7].campaignFormat' },
                    internalCampaignCampaignFormatEight: { alias: ['internal campaign attributes campaign format 8'], path: 'internalCampaign.attributes[8].campaignFormat' },
                    internalCampaignCampaignFormatNine: { alias: ['internal campaign attributes campaign format 9'], path: 'internalCampaign.attributes[9].campaignFormat' },
                    internalCampaignCampaignFormatTen: { alias: ['internal campaign attributes campaign format 10'], path: 'internalCampaign.attributes[10].campaignFormat' },
                    internalCampaignCampaignFormatEleven: { alias: ['internal campaign attributes campaign format 11'], path: 'internalCampaign.attributes[11].campaignFormat' },
                    internalCampaignCampaignFormatTwelve: { alias: ['internal campaign attributes campaign format 12'], path: 'internalCampaign.attributes[12].campaignFormat' },
                    internalCampaignCampaignFormatThirteen: { alias: ['internal campaign attributes campaign format 13'], path: 'internalCampaign.attributes[13].campaignFormat' },
                    internalCampaignCampaignNameOne: { alias: ['internal campaign attributes campaign name 1'], path: 'internalCampaign.attributes[1].campaignName' },
                    internalCampaignCampaignNameTwo: { alias: ['internal campaign attributes campaign name 2'], path: 'internalCampaign.attributes[2].campaignName' },
                    internalCampaignCampaignNameThree: { alias: ['internal campaign attributes campaign name 3'], path: 'internalCampaign.attributes[3].campaignName' },
                    internalCampaignCampaignNameFour: { alias: ['internal campaign attributes campaign name 4'], path: 'internalCampaign.attributes[4].campaignName' },
                    internalCampaignCampaignNameFive: { alias: ['internal campaign attributes campaign name 5'], path: 'internalCampaign.attributes[5].campaignName' },
                    internalCampaignCampaignNameSix: { alias: ['internal campaign attributes campaign name 6'], path: 'internalCampaign.attributes[6].campaignName' },
                    internalCampaignCampaignNameSeven: { alias: ['internal campaign attributes campaign name 7'], path: 'internalCampaign.attributes[7].campaignName' },
                    internalCampaignCampaignNameEight: { alias: ['internal campaign attributes campaign name 8'], path: 'internalCampaign.attributes[8].campaignName' },
                    internalCampaignCampaignNameNine: { alias: ['internal campaign attributes campaign name 9'], path: 'internalCampaign.attributes[9].campaignName' },
                    internalCampaignCampaignNameTen: { alias: ['internal campaign attributes campaign name 10'], path: 'internalCampaign.attributes[10].campaignName' },
                    internalCampaignCampaignNameEleven: { alias: ['internal campaign attributes campaign name 11'], path: 'internalCampaign.attributes[11].campaignName' },
                    internalCampaignCampaignNameTwelve: { alias: ['internal campaign attributes campaign name 12'], path: 'internalCampaign.attributes[12].campaignName' },
                    internalCampaignCampaignNameThirteen: { alias: ['internal campaign attributes campaign name 13'], path: 'internalCampaign.attributes[13].campaignName' },
                    internalCampaignCollectiveCodeOne: { alias: ['internal campaign attributes collective code 1'], path: 'internalCampaign.attributes[1].collectiveCode' },
                    internalCampaignCollectiveCodeTwo: { alias: ['internal campaign attributes collective code 2'], path: 'internalCampaign.attributes[2].collectiveCode' },
                    internalCampaignCollectiveCodeThree: { alias: ['internal campaign attributes collective code 3'], path: 'internalCampaign.attributes[3].collectiveCode' },
                    internalCampaignCollectiveCodeFour: { alias: ['internal campaign attributes collective code 4'], path: 'internalCampaign.attributes[4].collectiveCode' },
                    internalCampaignCollectiveCodeFive: { alias: ['internal campaign attributes collective code 5'], path: 'internalCampaign.attributes[5].collectiveCode' },
                    internalCampaignCollectiveCodeSix: { alias: ['internal campaign attributes collective code 6'], path: 'internalCampaign.attributes[6].collectiveCode' },
                    internalCampaignCollectiveCodeSeven: { alias: ['internal campaign attributes collective code 7'], path: 'internalCampaign.attributes[7].collectiveCode' },
                    internalCampaignCollectiveCodeEight: { alias: ['internal campaign attributes collective code 8'], path: 'internalCampaign.attributes[8].collectiveCode' },
                    internalCampaignCollectiveCodeNine: { alias: ['internal campaign attributes collective code 9'], path: 'internalCampaign.attributes[9].collectiveCode' },
                    internalCampaignCollectiveCodeTen: { alias: ['internal campaign attributes collective code 10'], path: 'internalCampaign.attributes[10].collectiveCode' },
                    internalCampaignCollectiveCodeEleven: { alias: ['internal campaign attributes collective code 11'], path: 'internalCampaign.attributes[11].collectiveCode' },
                    internalCampaignCollectiveCodeTwelve: { alias: ['internal campaign attributes collective code 12'], path: 'internalCampaign.attributes[12].collectiveCode' },
                    internalCampaignCollectiveCodeThirteen: { alias: ['internal campaign attributes collective code 13'], path: 'internalCampaign.attributes[13].collectiveCode' },
                    internalCampaignProductOne: { alias: ['internal campaign attributes product 1'], path: 'internalCampaign.attributes[1].product' },
                    internalCampaignProductTwo: { alias: ['internal campaign attributes product 2'], path: 'internalCampaign.attributes[2].product' },
                    internalCampaignProductThree: { alias: ['internal campaign attributes product 3'], path: 'internalCampaign.attributes[3].product' },
                    internalCampaignProductFour: { alias: ['internal campaign attributes product 4'], path: 'internalCampaign.attributes[4].product' },
                    internalCampaignProductFive: { alias: ['internal campaign attributes product 5'], path: 'internalCampaign.attributes[5].product' },
                    internalCampaignProductSix: { alias: ['internal campaign attributes product 6'], path: 'internalCampaign.attributes[6].product' },
                    internalCampaignProductSeven: { alias: ['internal campaign attributes product 7'], path: 'internalCampaign.attributes[7].product' },
                    internalCampaignProductEight: { alias: ['internal campaign attributes product 8'], path: 'internalCampaign.attributes[8].product' },
                    internalCampaignProductNine: { alias: ['internal campaign attributes product 9'], path: 'internalCampaign.attributes[9].product' },
                    internalCampaignProductTen: { alias: ['internal campaign attributes product 10'], path: 'internalCampaign.attributes[10].product' },
                    internalCampaignProductEleven: { alias: ['internal campaign attributes product 11'], path: 'internalCampaign.attributes[11].product' },
                    internalCampaignProductTwelve: { alias: ['internal campaign attributes product 12'], path: 'internalCampaign.attributes[12].product' },
                    internalCampaignProductThirteen: { alias: ['internal campaign attributes product 13'], path: 'internalCampaign.attributes[13].product' },
                    internalCampaignProductCodeOne: { alias: ['internal campaign attributes product code 1'], path: 'internalCampaign.attributes[1].productCode' },
                    internalCampaignProductCodeTwo: { alias: ['internal campaign attributes product code 2'], path: 'internalCampaign.attributes[2].productCode' },
                    internalCampaignProductCodeThree: { alias: ['internal campaign attributes product code 3'], path: 'internalCampaign.attributes[3].productCode' },
                    internalCampaignProductCodeFour: { alias: ['internal campaign attributes product code 4'], path: 'internalCampaign.attributes[4].productCode' },
                    internalCampaignProductCodeFive: { alias: ['internal campaign attributes product code 5'], path: 'internalCampaign.attributes[5].productCode' },
                    internalCampaignProductCodeSix: { alias: ['internal campaign attributes product code 6'], path: 'internalCampaign.attributes[6].productCode' },
                    internalCampaignProductCodeSeven: { alias: ['internal campaign attributes product code 7'], path: 'internalCampaign.attributes[7].productCode' },
                    internalCampaignProductCodeEight: { alias: ['internal campaign attributes product code 8'], path: 'internalCampaign.attributes[8].productCode' },
                    internalCampaignProductCodeNine: { alias: ['internal campaign attributes product code 9'], path: 'internalCampaign.attributes[9].productCode' },
                    internalCampaignProductCodeTen: { alias: ['internal campaign attributes product code 10'], path: 'internalCampaign.attributes[10].productCode' },
                    internalCampaignProductCodeEleven: { alias: ['internal campaign attributes product code 11'], path: 'internalCampaign.attributes[11].productCode' },
                    internalCampaignProductCodeTwelve: { alias: ['internal campaign attributes product code 12'], path: 'internalCampaign.attributes[12].productCode' },
                    internalCampaignProductCodeThirteen: { alias: ['internal campaign attributes product code 13'], path: 'internalCampaign.attributes[13].productCode' },
                    internalCampaignQuantityOne: { alias: ['internal campaign attributes quantity 1'], path: 'internalCampaign.attributes[1].quantity' },
                    internalCampaignQuantityTwo: { alias: ['internal campaign attributes quantity 2'], path: 'internalCampaign.attributes[2].quantity' },
                    internalCampaignQuantityThree: { alias: ['internal campaign attributes quantity 3'], path: 'internalCampaign.attributes[3].quantity' },
                    internalCampaignQuantityFour: { alias: ['internal campaign attributes quantity 4'], path: 'internalCampaign.attributes[4].quantity' },
                    internalCampaignQuantityFive: { alias: ['internal campaign attributes quantity 5'], path: 'internalCampaign.attributes[5].quantity' },
                    internalCampaignQuantitySix: { alias: ['internal campaign attributes quantity 6'], path: 'internalCampaign.attributes[6].quantity' },
                    internalCampaignQuantitySeven: { alias: ['internal campaign attributes quantity 7'], path: 'internalCampaign.attributes[7].quantity' },
                    internalCampaignQuantityEight: { alias: ['internal campaign attributes quantity 8'], path: 'internalCampaign.attributes[8].quantity' },
                    internalCampaignQuantityNine: { alias: ['internal campaign attributes quantity 9'], path: 'internalCampaign.attributes[9].quantity' },
                    internalCampaignQuantityTen: { alias: ['internal campaign attributes quantity 10'], path: 'internalCampaign.attributes[10].quantity' },
                    internalCampaignQuantityEleven: { alias: ['internal campaign attributes quantity 11'], path: 'internalCampaign.attributes[11].quantity' },
                    internalCampaignQuantityTwelve: { alias: ['internal campaign attributes quantity 12'], path: 'internalCampaign.attributes[12].quantity' },
                    internalCampaignQuantityThirteen: { alias: ['internal campaign attributes quantity 13'], path: 'internalCampaign.attributes[13].quantity' },
                    internalCampaignName: { alias: ['internal campaign attributes name'], path: 'internalCampaign.attributes[0].campaignName' },
                    internalCampaignNameOne: { alias: ['internal campaign attributes name 1'], path: 'internalCampaign.attributes[1].campaignName' },
                    internalCampaignNameTwo: { alias: ['internal campaign attributes name 2'], path: 'internalCampaign.attributes[2].campaignName' },
                    internalCampaignNameThree: { alias: ['internal campaign attributes name 3'], path: 'internalCampaign.attributes[3].campaignName' },
                    internalCampaignNameFour: { alias: ['internal campaign attributes name 4'], path: 'internalCampaign.attributes[4].campaignName' },
                    internalCampaignNameFive: { alias: ['internal campaign attributes name 5'], path: 'internalCampaign.attributes[5].campaignName' },
                    internalCampaignNameSix: { alias: ['internal campaign attributes name 6'], path: 'internalCampaign.attributes[6].campaignName' },
                    internalCampaignNameSeven: { alias: ['internal campaign attributes name 7'], path: 'internalCampaign.attributes[7].campaignName' },
                    internalCampaignNameEight: { alias: ['internal campaign attributes name 8'], path: 'internalCampaign.attributes[8].campaignName' },
                    internalCampaignNameNine: { alias: ['internal campaign attributes name 9'], path: 'internalCampaign.attributes[9].campaignName' },
                    internalCampaignNameTen: { alias: ['internal campaign attributes name 10'], path: 'internalCampaign.attributes[10].campaignName' },
                    internalCampaignNameEleven: { alias: ['internal campaign attributes name 11'], path: 'internalCampaign.attributes[11].campaignName' },
                    internalCampaignNameTwelve: { alias: ['internal campaign attributes name 12'], path: 'internalCampaign.attributes[12].campaignName' },
                    internalCampaignNameThirteen: { alias: ['internal campaign attributes name 13'], path: 'internalCampaign.attributes[13].campaignName' },
                    internalCampaignAttributesCampaignFormat: { alias: ['internal campaign attributes campaign format'], path: 'internalCampaign.attributes[0].campaignFormat' },
                    internalCampaignAttributesCampaignName: { alias: ['internal campaign attributes campaign name'], path: 'internalCampaign.attributes[0].campaignName' },
                    internalCampaignAttributesCollectiveCode: { alias: ['internal campaign attributes collective code'], path: 'internalCampaign.attributes[0].collectiveCode' },
                    internalCampaignAttributesLocation: { alias: ['internal campaign attributes location'], path: 'internalCampaign.attributes[0].location' },
                    internalCampaignAttributesProduct: { alias: ['internal campaign attributes product'], path: 'internalCampaign.attributes[0].product' },
                    internalCampaignAttributesProductCode: { alias: ['internal campaign attributes product code'], path: 'internalCampaign.attributes[0].productCode' },
                    internalCampaignAttributesQuantity: { alias: ['internal campaign attributes quantity'], path: 'internalCampaign.attributes[0].quantity' },
                    internalCampaignEventEventInfoEventName: { alias: ['internal campaign event name'], path: 'internalCampaign.event.eventInfo.eventName' },
                    internalCampaignEventEventInfoSiteActionName: { alias: ['internal campaign site action name'], path: 'internalCampaign.event.eventInfo.siteActionName' },

                    // digitalData.user
                    userAgent: { alias: ['device user agent'], path: 'user.device.userAgent' },
                    mobile: { alias: ['device mobile'], path: 'user.device.mobile' },
                    root: { alias: ['device root'], path: 'user.device.root' },
                    userState: { alias: ['user userState'], path: 'user.userState' },
                    profileID: { alias: ['profile ID'], path: 'user.IDs[0].profileID' },
                    userID: { alias: ['user ID'], path: 'user.IDs[0].userID' },
                    platformCode: { alias: ['platform code'], path: 'user.IDs[0].platformCode' },
                    prospectID: { alias: ['prospect ID'], path: 'user.IDs[0].prospectID' },
                    global: { alias: ['user segment global'], path: 'user.segment.global' },
                    profile: { alias: ['user segment profile'], path: 'user.segment.profile' },
                    gender: { alias: ['user gender'], path: 'user.gender' },
                    country: { alias: ['user country'], path: 'user.country' },
                    state: { alias: ['user state'], path: 'user.state' },
                    age: { alias: ['user age'], path: 'user.age' },
                    civilStatus: { alias: ['civil status'], path: 'user.civilStatus' },
                    educationLevel: { alias: ['educational level'], path: 'user.educationLevel' },
                    jobType: { alias: ['job type'], path: 'user.jobType' },
                    userCountry: { alias: ['user country', 'country'], path: 'user.country' },
                    userSegmentGlobal: { alias: ['user segment global'], path: 'user.segment.global' },

                    // digitalData.products.0 - first element
                    productsAmount: { alias: ['product amount'], path: 'products.attributes[0].amount' },
                    productsAttributes: { alias: ['products attributes'], path: 'products.attributes' },
                    productsCurrency: { alias: ['product currency'], path: 'products.attributes[0].currency' },
                    productsInterestRate: { alias: ['product interest rate'], path: 'products.attributes[0].interestRate.rate' },
                    productsInterestTae: { alias: ['product interest tae'], path: 'products.attributes[0].interestRate.tae' },
                    productsNumberHolders: {alias: ['product number of holders'], path: 'products.attributes[0].numberOfHolders'},
                    productsNumberPayments: { alias: ['product number of payments'], path: 'products.attributes[0].numberOfPayments' },
                    productsPaymentAmount: { alias: ['product payment amount'], path: 'products.attributes[0].paymentAmount' },
                    productsPaymentDate: { alias: ['product payment date'], path: 'products.attributes[0].paymentDate' },
                    productsPaymentType: { alias: ['product payment type'], path: 'products.attributes[0].paymentType' },
                    productsPrimaryName: { alias: ['product primary name'], path: 'products.attributes[0].primaryName' },
                    productsPrimaryCategory: { alias: ['product primary category'], path: 'products.attributes[0].primaryCategory' },
                    productsProductName: { alias: ['product name'], path: 'products.attributes[0].productName' },
                    productsProductSubtype: { alias: ['product subtype'], path: 'products.attributes[0].productSubtype' },
                    productsQuantity: { alias: ['product quantity'], path: 'products.attributes[0].quantity' },
                    productsServiceCharge: { alias: ['product service charge'], path: 'products.attributes[0].serviceCharge' },
                    productsState: { alias: ['product state'], path: 'products.attributes[0].state' },
                    productsTerms: { alias: ['products term'], path: 'products.attributes[0].term' },
                    // digitalData.products.1 - second element
                    productsAmountOne: { alias: ['product amount 1'], path: 'products.attributes[1].amount' },
                    productsAttributesOne: { alias: ['products attributes 1'], path: 'products.attributes' },
                    productsCurrencyOne: { alias: ['product currency 1'], path: 'products.attributes[1].currency' },
                    productsInterestRateOne: { alias: ['product interest rate 1'], path: 'products.attributes[1].interestRate.rate' },
                    productsInterestTaeOne: { alias: ['product interest tae 1'], path: 'products.attributes[1].interestRate.tae' },
                    productsNumberHoldersOne: {alias: ['product number of holders 1'], path: 'products.attributes[1].numberOfHolders'},
                    productsNumberPaymentsOne: { alias: ['product number of payments 1'], path: 'products.attributes[1].numberOfPayments' },
                    productsPaymentAmountOne: { alias: ['product payment amount 1'], path: 'products.attributes[1].paymentAmount' },
                    productsPaymentDateOne: { alias: ['product payment date 1'], path: 'products.attributes[1].paymentDate' },
                    productsPaymentTypeOne: { alias: ['product payment type 1'], path: 'products.attributes[1].paymentType' },
                    productsPrimaryNameOne: { alias: ['product primary name 1'], path: 'products.attributes[1].primaryName' },
                    productsPrimaryCategoryOne: { alias: ['product primary category 1'], path: 'products.attributes[1].primaryCategory' },
                    productsProductNameOne: { alias: ['product name 1'], path: 'products.attributes[1].productName' },
                    productsProductSubtypeOne: { alias: ['product subtype 1'], path: 'products.attributes[1].productSubtype' },
                    productsQuantityOne: { alias: ['product quantity 1'], path: 'products.attributes[1].quantity' },
                    productsServiceChargeOne: { alias: ['product service charge 1'], path: 'products.attributes[1].serviceCharge' },
                    productsStateOne: { alias: ['product state 1'], path: 'products.attributes[1].state' },
                    // digitalData.products.2 - third element
                    productsPrimaryCategoryTwo: { alias: ['product primary category 2'], path: 'products.attributes[2].primaryCategory' },

                    // digitalData.application
                    application: { alias: ['application'], path: 'application.application' },
                    fulfillmentModel: { alias: ['fulfillment model'], path: 'application.fulfillmentModel' },
                    applicationProcess: { alias: ['application process'], path: 'application.process' },
                    applicationEarnings: { alias: ['application earnings'], path: 'application.earnings' },
                    applicationOffer: { alias: ['application offer'], path: 'application.offer' },
                    applicationOperationNumber: { alias: ['application operation number'], path: 'application.operationNumber' },
                    applicationType: { alias: ['application type'], path: 'application.application.type' },
                    applicationTypology: { alias: ['application typology'], path: 'application.typology' },
                    applicationProgramTypeHired: { alias: ['application program type hired'], path: 'application.programTypeHired' },
                    applicationName: { alias: ['application name'], path: 'application.application.name' },
                    applicationStep: { alias: ['application step'], path: 'application.step' },
                    applicationState: { alias: ['application state'], path: 'application.state' },
                    globalApplication: { alias: ['global application'], path: 'application.globalApplication'},
                    declinedReason: { alias: ['declined reason'], path: 'application.declinedReason'},
                    errorType: { alias: ['site error'], path: 'application.errorType'},
                    customField: { alias: ['custom fields'], path: 'application.customFields'},
                    applicationIsQualifiedVisits: { alias: ['qualified visits'], path: 'application.isQualifiedVisits'},
                    applicationInteractionLevel: { alias: ['interaction level'], path: 'application.interactionLevel'},

                    // digitalData.customerExperience
                    customerExperienceAttributes: { alias: ['customer experience', 'customer experience attributes'], path: 'customerExperience.attributes' },
                    customerExperienceSpace: { alias: ['customer experience attributes space'], path: 'customerExperience.attributes[0].space' },
                    customerExperienceSpaceID: { alias: ['customer experience attributes space id'], path: 'customerExperience.attributes[0].spaceID' },
                    customerExperienceSpacePlacement: { alias: ['customer experience attributes space placement'], path: 'customerExperience.attributes[0].spacePlacement' },
                    customerExperienceCollection: { alias: ['customer experience attributes collection'], path: 'customerExperience.attributes[0].collection' },
                    customerExperienceCollectionID: { alias: ['customer experience attributes collection id'], path: 'customerExperience.attributes[0].collectionID' },
                    customerExperienceCollectionPosition: { alias: ['customer experience attributes collection position'], path: 'customerExperience.attributes[0].collectionPosition' },
                    customerExperienceCollectionStatus: { alias: ['customer experience attributes collection status'], path: 'customerExperience.attributes[0].collectionStatus' },
                    customerExperienceCollectionStatusTimeChange: { alias: ['customer experience attributes collection status time change'], path: 'customerExperience.attributes[0].collectionStatusTimeChange' },
                    customerExperienceCollectionExecutor: { alias: ['customer experience attributes collection executor'], path: 'customerExperience.attributes[0].collectionExecutor' }
                },
            },
        });
    }

    /**
     * To validate the variables values in no basic-way. To use the basic validation see {@link AbstractDevice.variablesValidation}.
     * Note: Never call this function directly, call {@link this.variablesValidation}, which will call this function.
     * @see {@link this.variablesValidation}
     * @see {@link this.variablesValidationByType}
     *
     * @param {Object} options - Options
     * @param {string} options.item The name of item to validate, is usually related with one of the defined device variables without an alias.
     * @param {string} [options.type] Validation type to use in the function {@link this.variablesValidationByType}
     * @param {*} [options.value] Value to use on validation.
     * @param {Object} [options.args] Additional arguments
     * @private
     */
    async _variablesValidation({item, type, value, ...args} = {}) {
        let variable;
        switch (item.toLowerCase()) {
            case 'user profile id':
                variable = this.profileID;
                break;
            default:
                throw new BrowserVariableValidationKeyNotFound({item, args});
        }

        await this.variablesValidationByType({variable, type, value, ...args});
    }

    /**
     * To validate the given variable with no basic types. To use the basic types see {@link super.variablesValidationByType}.
     * Note: Never call this function directly, call {@link this.variablesValidationByType}, which will call this function.
     * @see {@link this.variablesValidationByType}
     *
     * @param {Object} options - Options
     * @param {BrowserVar|SpyVar} options.validationVariable The variable to validate
     * @param {string} [options.type] Validation type to use.
     * @param {*} [options.value] Value to use on validation.
     * @param {string|number} timeout Timeout used for waiting for the condition @see {@link AbstractVar.waitUntil}.
     * @param {Object} [options.args] Additional arguments.
     * @private
     */
    async _variablesValidationByType({validationVariable, type, value, timeout = config.wait.L, ...args} = {}) {
        timeout = utils.timeoutToNumber({time: timeout});
        switch (type.toLowerCase()) {
            case 'config country':
                await validationVariable.waitForText({text: config.country, timeout});
                break;
            case 'empty array':
                await validationVariable.waitForArrayLength({length: 0});
                break;
            case 'empty str object':
                await validationVariable.waitUntil({
                    condition: varValue => validateEmptyStrObject(varValue),
                    timeout,
                });
                break;
            case 'multiple string':
                await validationVariable.waitUntil({
                    condition: varValue => validateMultiStrObject(varValue, value, validationVariable),
                    timeout,
                });
                break;
            default:
                throw new BrowserVariableValidationTypeNotFound({type, args: {validationVariable, type, value, ...args}});
        }
    }
}

function validateEmptyStrObject(obj) {
    for (const key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value === 'object') {
            validateEmptyStrObject(value);
        } else if (value !== '') {
            throw new Error(`Key ${key} in ${obj} is not an empty string: ${value}.`);
        }
    }
    return true;
}

function validateMultiStrObject(result, value, variable) {
    const valueSplit = value.split(',');
    const variable1 = valueSplit[0];
    const variable2 = valueSplit[1];
    if (!(variable1.includes(result) || variable2.includes(result))) {
        throw new Error(`Key ${variable} is not contains the value: ${value}.`);
    }
    return true;
}
