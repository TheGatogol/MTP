4
before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

given a user with the following criteria: (passed)

and the user accesses to Landing Promotions from dashboard (passed)

when the user enrolls in the promotion from promotion detail (passed)

then the user sees the following items in the screen: (failed)

@can not be determined with webdriver.io
Error: RADISH ERROR [TVE1] : [RADISH] There was an error in the table validation. / Error cause: [RADISH] The table validation produced 1 error, the next lines are a summary, see the above lines to see the details.
	RADISH ERROR [UT8] : [UTILS RADISH] An error occurred on the table`s row / Error cause: {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Check if the row is well defined and all columns have correct data. 
	Additional error messages:
	 - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Review the values ​​in the table and correct them. 

    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:175:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

2026-09-25T02:41:55.130Z DEBUG CucumberHook: Before: 01-browser-log
2026-09-25T02:41:55.131Z DEBUG CucumberHook: Before: 01-session

2026-09-25T02:41:55.132Z DEBUG CucumberHook: Before: 10-storage
2026-09-25T02:41:55.133Z DEBUG CucumberHook: Before: 10-vbank
2026-09-25T02:41:55.135Z DEBUG CucumberHook: Before: 99-data-manager
2026-09-25T02:41:55.146Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:41:55.148Z DEBUG Connecting to DM namespace:  GloMo_MX_test_Users
2026-09-25T02:41:55.149Z INFO  [DM] Search Users by tags: ["enrollment_promotion_invitation","after_promotion_period_enrollment","single_participant_card"]
2026-09-25T02:41:55.741Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:41:55.741Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:41:55.742Z ✔ Given a user with the following criteria: - 🕒 597 ms
2026-09-25T02:41:55.743Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:41:55.755Z DEBUG Going to rewardsLanding page from Start page...
2026-09-25T02:41:55.839Z DEBUG Going to Dashboard page from Start page...
2026-09-25T02:41:55.841Z DEBUG Going to Login page from Start page...
2026-09-25T02:41:56.271Z DEBUG Injecting radish's shadow function.
2026-09-25T02:41:56.935Z DEBUG Waiting to load the Login page.
2026-09-25T02:41:56.936Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:41:56.938Z DEBUG Injecting radish's shadow function.
2026-09-25T02:41:59.833Z DEBUG Invoking waitForDisplayed for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:42:00.946Z INFO  Verifying the text for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:42:00.947Z INFO  Getting text for Login:continueButton{#cells-template-login[state="active"] #continueBtn}.
2026-09-25T02:42:01.230Z INFO  [LOGIN] is loaded
2026-09-25T02:42:01.231Z DEBUG Going to Dashboard page from Login page...
2026-09-25T02:42:01.531Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:01.750Z INFO  Writing "6568629678" on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:42:01.756Z INFO  Clicking on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:42:02.629Z DEBUG Invoking waitForDisplayed for element Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:02.762Z INFO  Writing "8C15319E1CB925D9D52B08DF08E2293A" on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:42:02.829Z INFO  Clicking on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:42:03.418Z DEBUG Invoking waitForClickable for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":15000,"reverse":false}
2026-09-25T02:42:03.635Z INFO  Clicking on Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:42:03.636Z INFO  Scrolling to element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:42:04.040Z DEBUG Invoking waitForDisplayed for element Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:04.165Z INFO  Writing "Glomo2026" on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:42:04.165Z INFO  Clicking on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:42:04.522Z DEBUG Invoking waitForDisplayed for element Login:accessButton{#cells-template-login[state="active"] #loginBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:42:04.629Z INFO  Clicking on Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:42:04.629Z INFO  Scrolling to element Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:42:04.883Z INFO  Pause 3000 ms
2026-09-25T02:42:08.384Z DEBUG Waiting to load the Dashboard page.
2026-09-25T02:42:08.384Z DEBUG Invoking waitForDisplayed for element Dashboard:__root{#cells-template-dashboard[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:42:10.731Z INFO  [DASHBOARD] is loaded
2026-09-25T02:42:10.731Z DEBUG Going to rewardsLanding page from Dashboard page...
2026-09-25T02:42:10.732Z DEBUG Invoking waitForDisplayed for element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:11.198Z INFO  Clicking on Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:42:11.198Z INFO  Scrolling to element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:42:11.542Z DEBUG Invoking waitForDisplayed for element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}: {"timeout":45000,"reverse":false,"failOnError":true}
2026-09-25T02:42:11.671Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:42:11.868Z INFO  Clicking on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:42:11.868Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:42:12.620Z DEBUG Waiting to load the rewardsLanding page.
2026-09-25T02:42:12.620Z DEBUG Waiting for the bbva-header-main component to be visible.
2026-09-25T02:42:12.620Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-header-main:text{#cells-template-reward[state="active"] [data-tag-name=bbva-header-main][text="rewards-landing-header-title"] .text}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T02:42:13.657Z INFO  [REWARDSLANDING] is loaded
2026-09-25T02:42:13.657Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:42:15.224Z INFO  Clicking on rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:42:15.224Z INFO  Scrolling to element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:42:16.638Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T02:42:16.639Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:42:16.733Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:42:16.772Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:42:16.800Z INFO  Clicking on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:42:16.800Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:42:16.953Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:42:16.953Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:42:16.953Z ✔ And the user accesses to Landing Promotions from dashboard - 🕒 21210 ms
2026-09-25T02:42:16.954Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:42:16.956Z DEBUG Going to invitationEnrollmentPromotions page from rewardsLanding page...
2026-09-25T02:42:16.956Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T02:42:17.517Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}
2026-09-25T02:42:17.573Z DEBUG Invoking waitForExist for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:17.710Z DEBUG Invoking waitForDisplayed for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:17.773Z INFO  Waiting ("15000" ms) until the element has stopped moving: "rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}"
2026-09-25T02:42:17.773Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 150.
2026-09-25T02:42:17.819Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:42:17.986Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 149.
2026-09-25T02:42:18.027Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:42:18.093Z DEBUG Element stopped moving: rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:42:18.171Z INFO  Clicking on rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:42:18.171Z INFO  Scrolling to element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:42:18.349Z DEBUG Generating new element instance from element rewardsLanding:especialPromotionsSlideActive{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="__NAME__"]}: {"placeholder":"__NAME__","value":"Bodega Aurrera"}
2026-09-25T02:42:18.350Z DEBUG Invoking waitForExist for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:18.389Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:18.473Z INFO  Clicking on rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T02:42:18.473Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T02:42:18.744Z DEBUG Invoking waitForDisplayed for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:42:19.355Z INFO  Waiting ("30000" ms) until the element has stopped moving: "rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}"
2026-09-25T02:42:19.355Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 300.
2026-09-25T02:42:19.431Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:42:19.654Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 299.
2026-09-25T02:42:19.739Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:42:19.853Z DEBUG Element stopped moving: rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:42:19.954Z INFO  Clicking on rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:42:19.955Z INFO  Scrolling to element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:42:20.245Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T02:42:20.246Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T02:42:21.748Z DEBUG Waiting to load the invitationEnrollmentPromotions page.
2026-09-25T02:42:21.748Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:no-name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:42:21.967Z INFO  [INVITATIONENROLLMENTPROMOTIONS] is loaded
2026-09-25T02:42:21.967Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:42:21.967Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:42:21.968Z ✔ When the user enrolls in the promotion from promotion detail - 🕒 5014 ms
2026-09-25T02:42:21.968Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:42:21.968Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion header","value":""}
2026-09-25T02:42:21.969Z INFO  Waiting ("30000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}"
2026-09-25T02:42:21.969Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader} is moving. Tries left: 300.
2026-09-25T02:42:22.011Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}
2026-09-25T02:42:22.441Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader} is moving. Tries left: 299.
2026-09-25T02:42:22.487Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}
2026-09-25T02:42:22.599Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}
2026-09-25T02:42:22.762Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}
2026-09-25T02:42:22.858Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:37.864Z INFO  Archivo de errores de radish guardado en /logs/RADISH_ERRORS.log
2026-09-25T02:42:38.330Z ERROR An error occurred on row {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
Error: RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
    at Proxy.waitUntil (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/index.js:249:23)
    at Proxy.waitUntil (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:1174:24)
    at InvitationEnrollmentPromotions._screenValidation (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:406:17)
    at validateRow (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:138:13)
    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:167:17)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
2026-09-25T02:42:38.331Z INFO  Archivo de errores de radish guardado en /logs/RADISH_ERRORS.log
2026-09-25T02:42:38.331Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion close button","value":""}
2026-09-25T02:42:38.331Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.closeButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] :not([class="transition-container scrollable"]) [data-tag-name="bbva-header-main"] #btn-close}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:38.452Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate campaign label","value":""}
2026-09-25T02:42:38.453Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.campaignLabel{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"] [data-tag-name="bbva-type-text"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:38.729Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate campaign value","value":""}
2026-09-25T02:42:38.729Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.campaignValue{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-first-simple-list-label"] [data-tag-name="bbva-type-text"][alignment="right"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:38.846Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion type label","value":""}
2026-09-25T02:42:38.846Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.promotionTypeLabel{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"] [data-tag-name="bbva-type-text"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:39.138Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion type value","value":""}
2026-09-25T02:42:39.138Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.promotionTypeValue{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] .summary [data-tag-name="rewards-promotions-invitation-enrollment-simple-list"][label="rewards-promotions-invitation-enrollment-enrollment-modal-step-prefilled-summary-second-simple-list-label"] [data-tag-name="bbva-type-text"][alignment="right"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:39.541Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion card title","value":""}
2026-09-25T02:42:39.541Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.title{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .header}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:39.943Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion single card name","value":""}
2026-09-25T02:42:39.943Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .name}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:40.229Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion single card number","value":""}
2026-09-25T02:42:40.229Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.number{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .card-number}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:40.355Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion single card amount","value":""}
2026-09-25T02:42:40.355Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.amount{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .amount}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:40.663Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion single card description","value":""}
2026-09-25T02:42:40.730Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.description{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .description}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:41.053Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion second card name","value":"not visible"}
2026-09-25T02:42:41.053Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardVarious.name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .name}: {"timeout":15000,"reverse":true,"failOnError":true}
2026-09-25T02:42:41.167Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion second card number","value":"not visible"}
2026-09-25T02:42:41.228Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardVarious.number{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .card-number}: {"timeout":15000,"reverse":true,"failOnError":true}
2026-09-25T02:42:41.329Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion second card amount","value":"not visible"}
2026-09-25T02:42:41.329Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardVarious.amount{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .amount}: {"timeout":15000,"reverse":true,"failOnError":true}
2026-09-25T02:42:41.442Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion second card description","value":"not visible"}
2026-09-25T02:42:41.443Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.cardVarious.description{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(2) .description}: {"timeout":15000,"reverse":true,"failOnError":true}
2026-09-25T02:42:41.730Z INFO  [InvitationEnrollmentPromotions] Validating table -> {"item":"modal activate promotion continue button","value":""}
2026-09-25T02:42:41.730Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:42:41.939Z INFO  Archivo de errores de radish guardado en /logs/RADISH_ERRORS.log
2026-09-25T02:42:41.941Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:42:41.942Z DEBUG Raw error message: Error: RADISH ERROR [TVE1] : [RADISH] There was an error in the table validation. / Error cause: [RADISH] The table validation produced 1 error, the next lines are a summary, see the above lines to see the details.
	RADISH ERROR [UT8] : [UTILS RADISH] An error occurred on the table`s row / Error cause: {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Check if the row is well defined and all columns have correct data. 
	Additional error messages:
	 - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Review the values ​​in the table and correct them. 

    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:175:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
2026-09-25T02:42:41.942Z DEBUG Checking for matching error class in message: Error: RADISH ERROR [TVE1] : [RADISH] There was an error in the table validation. / Error cause: [RADISH] The table validation produced 1 error, the next lines are a summary, see the above lines to see the details.
	RADISH ERROR [UT8] : [UTILS RADISH] An error occurred on the table`s row / Error cause: {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Check if the row is well defined and all columns have correct data. 
	Additional error messages:
	 - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Review the values ​​in the table and correct them. 

    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:175:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
2026-09-25T02:42:41.942Z DEBUG No matching error class found for: Error: RADISH ERROR [TVE1] : [RADISH] There was an error in the table validation. / Error cause: [RADISH] The table validation produced 1 error, the next lines are a summary, see the above lines to see the details.
	RADISH ERROR [UT8] : [UTILS RADISH] An error occurred on the table`s row / Error cause: {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Check if the row is well defined and all columns have correct data. 
	Additional error messages:
	 - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Review the values ​​in the table and correct them. 

    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:175:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
2026-09-25T02:42:41.943Z ERROR Unhandled error: Error: RADISH ERROR [TVE1] : [RADISH] There was an error in the table validation. / Error cause: [RADISH] The table validation produced 1 error, the next lines are a summary, see the above lines to see the details.
	RADISH ERROR [UT8] : [UTILS RADISH] An error occurred on the table`s row / Error cause: {"item":"modal activate promotion header","value":"","_args":{}} -> [Error] - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Check if the row is well defined and all columns have correct data. 
	Additional error messages:
	 - RADISH ERROR [PRB3] : [RADISH] Error invoking "waitUntil" on browser / Error cause: Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms.
	Found 1 elements, and 1 of them doesn't meet the condition. - Posible solution: Check your page configuration. 
	Additional error messages:
	 - Element "invitationEnrollmentPromotions:modalActivatePromotion.header{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] #helpModalHeader}" is not displayed after 15000 ms. - Posible solution: Review the values ​​in the table and correct them. 

    at validateTable (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/utils/index.js:175:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/common/validation.js:5:5)
2026-09-25T02:42:41.943Z DEBUG ErrorManager defined errors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
2026-09-25T02:42:41.943Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:42:41.946Z DEBUG CucumberHook: After: 99-data-manager
2026-09-25T02:42:42.033Z DEBUG CucumberHook: After: 01-remote-mobile
2026-09-25T02:42:42.034Z DEBUG CucumberHook: After: 01-browser-log
2026-09-25T02:42:42.034Z DEBUG CucumberHook: After: 10-stdout-logs

-----------------------------------------------------------------------
16
before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

given a user with the following criteria: (passed)

and the user accesses to Landing Promotions from dashboard (failed)

@can not be determined with webdriver.io
element click intercepted: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.elementClick (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/protocols/Web.js:29:9)
    at Proxy.click (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:304:21)
    at Proxy.accessPromotions (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/rewardsLanding.js:1638:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/promotionsLanding.js:25:5)
when the user tries to enroll in the promotion from promotion detail (pending)

then the user sees the following items in the screen: (pending)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

2026-09-25T02:41:18.969Z DEBUG CucumberHook: Before: 01-browser-log
2026-09-25T02:41:18.971Z DEBUG CucumberHook: Before: 01-session

2026-09-25T02:41:18.972Z DEBUG CucumberHook: Before: 10-storage
2026-09-25T02:41:18.972Z DEBUG CucumberHook: Before: 10-vbank
2026-09-25T02:41:18.973Z DEBUG CucumberHook: Before: 99-data-manager
2026-09-25T02:41:18.975Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:41:18.976Z DEBUG Connecting to DM namespace:  GloMo_MX_test_Users
2026-09-25T02:41:18.976Z INFO  [DM] Search Users by tags: ["no_participants_cards_error","after_promotion_period_enrollment"]
2026-09-25T02:41:19.073Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:41:19.073Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:41:19.074Z ✔ Given a user with the following criteria: - 🕒 100 ms
2026-09-25T02:41:19.155Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:41:19.172Z DEBUG Going to rewardsLanding page from Start page...
2026-09-25T02:41:19.261Z DEBUG Going to Dashboard page from Start page...
2026-09-25T02:41:19.265Z DEBUG Going to Login page from Start page...
2026-09-25T02:41:19.852Z DEBUG Injecting radish's shadow function.
2026-09-25T02:41:20.550Z DEBUG Waiting to load the Login page.
2026-09-25T02:41:20.551Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:41:20.552Z DEBUG Injecting radish's shadow function.
2026-09-25T02:41:23.948Z DEBUG Invoking waitForDisplayed for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:41:24.680Z INFO  Verifying the text for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:41:24.681Z INFO  Getting text for Login:continueButton{#cells-template-login[state="active"] #continueBtn}.
2026-09-25T02:41:24.849Z INFO  [LOGIN] is loaded
2026-09-25T02:41:24.849Z DEBUG Going to Dashboard page from Login page...
2026-09-25T02:41:24.874Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:41:25.074Z INFO  Writing "6568629678" on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:41:25.074Z INFO  Clicking on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:41:25.623Z DEBUG Invoking waitForDisplayed for element Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:41:25.777Z INFO  Writing "0B720AA8E767AAF530E37B6B8CAD9486" on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:41:25.777Z INFO  Clicking on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:41:26.325Z DEBUG Invoking waitForClickable for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":15000,"reverse":false}
2026-09-25T02:41:26.569Z INFO  Clicking on Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:41:26.570Z INFO  Scrolling to element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:41:26.821Z DEBUG Invoking waitForDisplayed for element Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:41:26.902Z INFO  Writing "Glomo2026" on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:41:26.902Z INFO  Clicking on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:41:27.448Z DEBUG Invoking waitForDisplayed for element Login:accessButton{#cells-template-login[state="active"] #loginBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:41:27.548Z INFO  Clicking on Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:41:27.548Z INFO  Scrolling to element Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:41:27.795Z INFO  Pause 3000 ms
2026-09-25T02:41:31.297Z DEBUG Waiting to load the Dashboard page.
2026-09-25T02:41:31.297Z DEBUG Invoking waitForDisplayed for element Dashboard:__root{#cells-template-dashboard[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:41:33.596Z INFO  [DASHBOARD] is loaded
2026-09-25T02:41:33.596Z DEBUG Going to rewardsLanding page from Dashboard page...
2026-09-25T02:41:33.596Z DEBUG Invoking waitForDisplayed for element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:41:33.653Z INFO  Clicking on Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:41:33.653Z INFO  Scrolling to element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:41:33.909Z DEBUG Invoking waitForDisplayed for element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}: {"timeout":45000,"reverse":false,"failOnError":true}
2026-09-25T02:41:33.970Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:41:34.025Z INFO  Clicking on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:41:34.026Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:41:34.273Z WARN  Attempt 1: Failed to click on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}. Error: element not interactable: element has zero size
  (Session info: chrome=136.0.7103.113)
2026-09-25T02:41:34.273Z WARN  Retrying click on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]} (1/3)...
2026-09-25T02:41:34.273Z INFO  Pause 2000 ms
2026-09-25T02:41:36.275Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:41:36.983Z DEBUG Waiting to load the rewardsLanding page.
2026-09-25T02:41:36.983Z DEBUG Waiting for the bbva-header-main component to be visible.
2026-09-25T02:41:36.983Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-header-main:text{#cells-template-reward[state="active"] [data-tag-name=bbva-header-main][text="rewards-landing-header-title"] .text}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T02:41:37.402Z INFO  [REWARDSLANDING] is loaded
2026-09-25T02:41:37.402Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:41:38.567Z INFO  Clicking on rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:41:38.567Z INFO  Scrolling to element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:41:38.826Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T02:41:38.826Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:41:38.948Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:41:38.985Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:41:39.073Z INFO  Clicking on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:41:39.073Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:41:43.659Z WARN  Attempt 1: Failed to click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}. Error: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
2026-09-25T02:41:43.659Z WARN  Retrying click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.} (1/3)...
2026-09-25T02:41:43.659Z INFO  Pause 2000 ms
2026-09-25T02:41:45.664Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:41:50.426Z WARN  Attempt 2: Failed to click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}. Error: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
2026-09-25T02:41:50.426Z WARN  Retrying click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.} (2/3)...
2026-09-25T02:41:50.426Z INFO  Pause 2000 ms
2026-09-25T02:41:52.447Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:41:56.948Z WARN  Attempt 3: Failed to click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}. Error: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
2026-09-25T02:41:56.948Z ERROR Final attempt to click on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.} failed after 3 retries.
2026-09-25T02:41:57.060Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:41:57.060Z DEBUG Raw error message: element click intercepted: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.elementClick (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/protocols/Web.js:29:9)
    at Proxy.click (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:304:21)
    at Proxy.accessPromotions (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/rewardsLanding.js:1638:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/promotionsLanding.js:25:5)
2026-09-25T02:41:57.060Z DEBUG Checking for matching error class in message: element click intercepted: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.elementClick (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/protocols/Web.js:29:9)
    at Proxy.click (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:304:21)
    at Proxy.accessPromotions (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/rewardsLanding.js:1638:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/promotionsLanding.js:25:5)
2026-09-25T02:41:57.060Z DEBUG No matching error class found for: element click intercepted: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.elementClick (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/protocols/Web.js:29:9)
    at Proxy.click (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:304:21)
    at Proxy.accessPromotions (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/rewardsLanding.js:1638:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/promotionsLanding.js:25:5)
2026-09-25T02:41:57.061Z ERROR Unhandled error: element click intercepted: element click intercepted: Element <button class="tab" role="tab" id="tab-1" aria-selected="false" aria-controls="content-1" tabindex="-1">...</button> is not clickable at point (235, 412). Other element would receive the click: <onboarding-full-screen-carousel visible="" hide-help-faqs="" ambient="primary" content-fragment-host="http://localhost:9031" content-fragment-path="content/caas/mexico/glomo/rewards-landing/onboarding.model.json" data-tag-name="onboarding-full-screen-carousel"></onboarding-full-screen-carousel>
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.elementClick (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/commands/protocols/Web.js:29:9)
    at Proxy.click (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:304:21)
    at Proxy.accessPromotions (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/rewardsLanding.js:1638:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/promotionsLanding.js:25:5)
2026-09-25T02:41:57.061Z DEBUG ErrorManager defined errors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
2026-09-25T02:41:57.061Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:41:57.062Z DEBUG CucumberHook: After: 99-data-manager
2026-09-25T02:41:57.069Z DEBUG CucumberHook: After: 01-remote-mobile
2026-09-25T02:41:57.069Z DEBUG CucumberHook: After: 01-browser-log
2026-09-25T02:41:57.070Z DEBUG CucumberHook: After: 10-stdout-logs
-----------------------------------------------------------------------------------------------
before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

given a user with the following criteria: (passed)

and the user accesses to Landing Promotions from dashboard (passed)

and the user "tries to enroll in the promotion" from promotion detail with "single" participant card (passed)

when the user selects participants purchases (failed)

@can not be determined with webdriver.io
TypeError: Cannot read properties of undefined (reading 'waitForAnimation')
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:235:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
then the user sees the following items in the screen: (pending)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

2026-09-25T02:43:28.298Z DEBUG CucumberHook: Before: 01-browser-log
2026-09-25T02:43:28.299Z DEBUG CucumberHook: Before: 01-session

2026-09-25T02:43:28.301Z DEBUG CucumberHook: Before: 10-storage
2026-09-25T02:43:28.302Z DEBUG CucumberHook: Before: 10-vbank
2026-09-25T02:43:28.303Z DEBUG CucumberHook: Before: 99-data-manager
2026-09-25T02:43:28.386Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:43:28.387Z DEBUG Connecting to DM namespace:  GloMo_MX_test_Users
2026-09-25T02:43:28.387Z INFO  [DM] Search Users by tags: ["enrollment_promotion_invitation","after_promotion_period_enrollment","single_participant_card"]
2026-09-25T02:43:30.882Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:43:30.883Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:43:30.884Z ✔ Given a user with the following criteria: - 🕒 2499 ms
2026-09-25T02:43:30.885Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:43:30.892Z DEBUG Going to rewardsLanding page from Start page...
2026-09-25T02:43:30.987Z DEBUG Going to Dashboard page from Start page...
2026-09-25T02:43:30.989Z DEBUG Going to Login page from Start page...
2026-09-25T02:43:31.682Z DEBUG Injecting radish's shadow function.
2026-09-25T02:43:32.383Z DEBUG Waiting to load the Login page.
2026-09-25T02:43:32.384Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:43:32.385Z DEBUG Injecting radish's shadow function.
2026-09-25T02:43:35.182Z DEBUG Invoking waitForDisplayed for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:43:36.082Z INFO  Verifying the text for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:43:36.082Z INFO  Getting text for Login:continueButton{#cells-template-login[state="active"] #continueBtn}.
2026-09-25T02:43:36.382Z INFO  [LOGIN] is loaded
2026-09-25T02:43:36.382Z DEBUG Going to Dashboard page from Login page...
2026-09-25T02:43:36.482Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:36.713Z INFO  Writing "6568629678" on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:43:36.714Z INFO  Clicking on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T02:43:37.682Z DEBUG Invoking waitForDisplayed for element Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:38.000Z INFO  Writing "8C15319E1CB925D9D52B08DF08E2293A" on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:43:38.000Z INFO  Clicking on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T02:43:39.083Z DEBUG Invoking waitForClickable for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":15000,"reverse":false}
2026-09-25T02:43:39.409Z INFO  Clicking on Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:43:39.410Z INFO  Scrolling to element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T02:43:40.286Z DEBUG Invoking waitForDisplayed for element Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:40.688Z INFO  Writing "Glomo2026" on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:43:40.688Z INFO  Clicking on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T02:43:41.348Z DEBUG Invoking waitForDisplayed for element Login:accessButton{#cells-template-login[state="active"] #loginBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:43:41.510Z INFO  Clicking on Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:43:41.510Z INFO  Scrolling to element Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T02:43:42.284Z INFO  Pause 3000 ms
2026-09-25T02:43:45.790Z DEBUG Waiting to load the Dashboard page.
2026-09-25T02:43:45.791Z DEBUG Invoking waitForDisplayed for element Dashboard:__root{#cells-template-dashboard[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:43:47.768Z INFO  [DASHBOARD] is loaded
2026-09-25T02:43:47.768Z DEBUG Going to rewardsLanding page from Dashboard page...
2026-09-25T02:43:47.768Z DEBUG Invoking waitForDisplayed for element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:47.928Z INFO  Clicking on Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:43:47.928Z INFO  Scrolling to element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T02:43:48.765Z DEBUG Invoking waitForDisplayed for element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}: {"timeout":45000,"reverse":false,"failOnError":true}
2026-09-25T02:43:48.856Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:43:48.936Z INFO  Clicking on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:43:48.936Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T02:43:49.687Z DEBUG Waiting to load the rewardsLanding page.
2026-09-25T02:43:49.688Z DEBUG Waiting for the bbva-header-main component to be visible.
2026-09-25T02:43:49.688Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-header-main:text{#cells-template-reward[state="active"] [data-tag-name=bbva-header-main][text="rewards-landing-header-title"] .text}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T02:43:50.262Z INFO  [REWARDSLANDING] is loaded
2026-09-25T02:43:50.262Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:43:51.348Z INFO  Clicking on rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:43:51.348Z INFO  Scrolling to element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T02:43:51.574Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T02:43:51.574Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:43:51.615Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T02:43:51.653Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:43:51.679Z INFO  Clicking on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:43:51.679Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T02:43:51.865Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:43:51.865Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:43:51.865Z ✔ And the user accesses to Landing Promotions from dashboard - 🕒 20981 ms
2026-09-25T02:43:51.866Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:43:51.868Z DEBUG Going to invitationEnrollmentPromotions page from rewardsLanding page...
2026-09-25T02:43:51.868Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T02:43:54.181Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}
2026-09-25T02:43:54.308Z DEBUG Invoking waitForExist for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:54.484Z DEBUG Invoking waitForDisplayed for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:54.611Z INFO  Waiting ("15000" ms) until the element has stopped moving: "rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}"
2026-09-25T02:43:54.611Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 150.
2026-09-25T02:43:54.783Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:43:55.016Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 149.
2026-09-25T02:43:55.183Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:43:55.309Z DEBUG Element stopped moving: rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:43:55.413Z INFO  Clicking on rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:43:55.413Z INFO  Scrolling to element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T02:43:55.755Z DEBUG Generating new element instance from element rewardsLanding:especialPromotionsSlideActive{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="__NAME__"]}: {"placeholder":"__NAME__","value":"Bodega Aurrera"}
2026-09-25T02:43:55.756Z DEBUG Invoking waitForExist for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:55.827Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:55.982Z INFO  Clicking on rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T02:43:55.982Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T02:43:56.400Z DEBUG Invoking waitForDisplayed for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T02:43:56.507Z INFO  Waiting ("30000" ms) until the element has stopped moving: "rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}"
2026-09-25T02:43:56.507Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 300.
2026-09-25T02:43:56.583Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:43:56.808Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 299.
2026-09-25T02:43:56.883Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:43:57.012Z DEBUG Element stopped moving: rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:43:57.108Z INFO  Clicking on rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:43:57.108Z INFO  Scrolling to element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T02:43:57.459Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T02:43:57.459Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T02:43:58.982Z DEBUG Waiting to load the invitationEnrollmentPromotions page.
2026-09-25T02:43:58.982Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:no-name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T02:43:59.081Z INFO  [INVITATIONENROLLMENTPROMOTIONS] is loaded
2026-09-25T02:43:59.082Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .name}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:43:59.683Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:44:00.270Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}"
2026-09-25T02:44:00.270Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 150.
2026-09-25T02:44:00.331Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T02:44:00.524Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 149.
2026-09-25T02:44:00.581Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T02:44:00.658Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T02:44:00.740Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T02:44:00.741Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T02:44:00.964Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:44:00.964Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:44:00.964Z ✔ And the user "tries to enroll in the promotion" from promotion detail with "single" participant card - 🕒 9099 ms
2026-09-25T02:44:00.965Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T02:44:00.965Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T02:44:01.550Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}"
2026-09-25T02:44:01.550Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 150.
2026-09-25T02:44:01.601Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:01.774Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 149.
2026-09-25T02:44:01.834Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.009Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 148.
2026-09-25T02:44:02.061Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.240Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 147.
2026-09-25T02:44:02.287Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.460Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 146.
2026-09-25T02:44:02.511Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.614Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.710Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.710Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T02:44:02.883Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T02:44:02.884Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T02:44:03.885Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T02:44:03.885Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T02:44:04.888Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T02:44:05.004Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T02:44:05.005Z DEBUG Raw error message: TypeError: Cannot read properties of undefined (reading 'waitForAnimation')
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:235:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T02:44:05.005Z DEBUG Checking for matching error class in message: TypeError: Cannot read properties of undefined (reading 'waitForAnimation')
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:235:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T02:44:05.005Z DEBUG No matching error class found for: TypeError: Cannot read properties of undefined (reading 'waitForAnimation')
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:235:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T02:44:05.006Z ERROR Unhandled error: TypeError: Cannot read properties of undefined (reading 'waitForAnimation')
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:235:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T02:44:05.006Z DEBUG ErrorManager defined errors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
2026-09-25T02:44:05.006Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T02:44:05.007Z DEBUG CucumberHook: After: 99-data-manager
2026-09-25T02:44:05.012Z DEBUG CucumberHook: After: 01-remote-mobile
2026-09-25T02:44:05.012Z DEBUG CucumberHook: After: 01-browser-log
2026-09-25T02:44:05.013Z DEBUG CucumberHook: After: 10-stdout-logs
----------------------------------------------------------------------------------------------------
efore  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

given a user with the following criteria: (passed)

and the user accesses to Landing Promotions from dashboard (passed)

and the user "tries to enroll in the promotion" from promotion detail with "single" participant card (passed)

and the user completes purchases selection (failed)

@can not be determined with webdriver.io
TypeError: Cannot read properties of undefined (reading 'waitForExist')
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:255:27)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:46:5)
when the user closes the current operative (pending)

then the user sees the following items in the screen: (pending)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

2026-09-25T00:47:56.699Z DEBUG CucumberHook: Before: 01-browser-log
2026-09-25T00:47:56.701Z DEBUG CucumberHook: Before: 01-session

2026-09-25T00:47:56.702Z DEBUG CucumberHook: Before: 10-storage
2026-09-25T00:47:56.703Z DEBUG CucumberHook: Before: 10-vbank
2026-09-25T00:47:56.704Z DEBUG CucumberHook: Before: 99-data-manager
2026-09-25T00:47:56.707Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T00:47:56.709Z DEBUG Connecting to DM namespace:  GloMo_MX_test_Users
2026-09-25T00:47:56.709Z INFO  [DM] Search Users by tags: ["enrollment_promotion_invitation","after_promotion_period_enrollment","single_participant_card"]
2026-09-25T00:47:56.793Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T00:47:56.794Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T00:47:56.795Z ✔ Given a user with the following criteria: - 🕒 88 ms
2026-09-25T00:47:56.795Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T00:47:56.801Z DEBUG Going to rewardsLanding page from Start page...
2026-09-25T00:47:56.808Z DEBUG Going to Dashboard page from Start page...
2026-09-25T00:47:56.810Z DEBUG Going to Login page from Start page...
2026-09-25T00:47:57.889Z DEBUG Injecting radish's shadow function.
2026-09-25T00:47:58.418Z DEBUG Waiting to load the Login page.
2026-09-25T00:47:58.418Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T00:47:58.419Z DEBUG Injecting radish's shadow function.
2026-09-25T00:48:02.011Z DEBUG Invoking waitForDisplayed for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T00:48:02.141Z INFO  Verifying the text for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T00:48:02.141Z INFO  Getting text for Login:continueButton{#cells-template-login[state="active"] #continueBtn}.
2026-09-25T00:48:02.216Z INFO  [LOGIN] is loaded
2026-09-25T00:48:02.216Z DEBUG Going to Dashboard page from Login page...
2026-09-25T00:48:02.240Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:02.311Z INFO  Writing "6568629678" on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T00:48:02.312Z INFO  Clicking on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T00:48:02.635Z DEBUG Invoking waitForDisplayed for element Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:02.743Z INFO  Writing "8C15319E1CB925D9D52B08DF08E2293A" on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T00:48:02.743Z INFO  Clicking on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T00:48:03.789Z DEBUG Invoking waitForClickable for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":15000,"reverse":false}
2026-09-25T00:48:04.426Z INFO  Clicking on Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T00:48:04.426Z INFO  Scrolling to element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T00:48:04.690Z DEBUG Invoking waitForDisplayed for element Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:04.744Z INFO  Writing "Glomo2026" on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T00:48:04.745Z INFO  Clicking on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T00:48:05.086Z DEBUG Invoking waitForDisplayed for element Login:accessButton{#cells-template-login[state="active"] #loginBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T00:48:05.140Z INFO  Clicking on Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T00:48:05.141Z INFO  Scrolling to element Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T00:48:05.489Z INFO  Pause 3000 ms
2026-09-25T00:48:08.993Z DEBUG Waiting to load the Dashboard page.
2026-09-25T00:48:08.994Z DEBUG Invoking waitForDisplayed for element Dashboard:__root{#cells-template-dashboard[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T00:48:10.889Z INFO  [DASHBOARD] is loaded
2026-09-25T00:48:10.890Z DEBUG Going to rewardsLanding page from Dashboard page...
2026-09-25T00:48:10.890Z DEBUG Invoking waitForDisplayed for element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:11.461Z INFO  Clicking on Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T00:48:11.462Z INFO  Scrolling to element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T00:48:11.928Z DEBUG Invoking waitForDisplayed for element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}: {"timeout":45000,"reverse":false,"failOnError":true}
2026-09-25T00:48:12.088Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T00:48:12.212Z INFO  Clicking on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T00:48:12.212Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T00:48:12.988Z DEBUG Waiting to load the rewardsLanding page.
2026-09-25T00:48:12.988Z DEBUG Waiting for the bbva-header-main component to be visible.
2026-09-25T00:48:12.989Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-header-main:text{#cells-template-reward[state="active"] [data-tag-name=bbva-header-main][text="rewards-landing-header-title"] .text}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T00:48:13.519Z INFO  [REWARDSLANDING] is loaded
2026-09-25T00:48:13.520Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T00:48:14.215Z INFO  Clicking on rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T00:48:14.288Z INFO  Scrolling to element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T00:48:14.682Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T00:48:14.682Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T00:48:14.729Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T00:48:14.788Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T00:48:14.814Z INFO  Clicking on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:14.814Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:15.089Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T00:48:15.089Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T00:48:15.089Z ✔ And the user accesses to Landing Promotions from dashboard - 🕒 18294 ms
2026-09-25T00:48:15.090Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T00:48:15.092Z DEBUG Going to invitationEnrollmentPromotions page from rewardsLanding page...
2026-09-25T00:48:15.092Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T00:48:15.829Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}
2026-09-25T00:48:15.915Z DEBUG Invoking waitForExist for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:16.077Z DEBUG Invoking waitForDisplayed for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:16.142Z INFO  Waiting ("15000" ms) until the element has stopped moving: "rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}"
2026-09-25T00:48:16.142Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 150.
2026-09-25T00:48:16.185Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T00:48:16.357Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 149.
2026-09-25T00:48:16.398Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T00:48:16.473Z DEBUG Element stopped moving: rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T00:48:16.539Z INFO  Clicking on rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T00:48:16.539Z INFO  Scrolling to element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T00:48:16.741Z DEBUG Generating new element instance from element rewardsLanding:especialPromotionsSlideActive{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="__NAME__"]}: {"placeholder":"__NAME__","value":"Bodega Aurrera"}
2026-09-25T00:48:16.741Z DEBUG Invoking waitForExist for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:16.795Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:16.875Z INFO  Clicking on rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T00:48:16.875Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T00:48:17.202Z DEBUG Invoking waitForDisplayed for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T00:48:17.282Z INFO  Waiting ("30000" ms) until the element has stopped moving: "rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}"
2026-09-25T00:48:17.282Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 300.
2026-09-25T00:48:17.341Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T00:48:17.541Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 299.
2026-09-25T00:48:17.598Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T00:48:17.678Z DEBUG Element stopped moving: rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T00:48:17.748Z INFO  Clicking on rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T00:48:17.748Z INFO  Scrolling to element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T00:48:17.930Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T00:48:17.930Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T00:48:19.432Z DEBUG Waiting to load the invitationEnrollmentPromotions page.
2026-09-25T00:48:19.432Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:no-name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T00:48:19.510Z INFO  [INVITATIONENROLLMENTPROMOTIONS] is loaded
2026-09-25T00:48:19.510Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .name}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:20.553Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:20.628Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}"
2026-09-25T00:48:20.628Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 150.
2026-09-25T00:48:20.678Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:20.852Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 149.
2026-09-25T00:48:20.904Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:21.113Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 148.
2026-09-25T00:48:21.162Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:21.381Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:21.632Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:21.632Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T00:48:21.819Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T00:48:21.820Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T00:48:21.820Z ✔ And the user "tries to enroll in the promotion" from promotion detail with "single" participant card - 🕒 6730 ms
2026-09-25T00:48:21.820Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T00:48:21.821Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:22.404Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}"
2026-09-25T00:48:22.404Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 150.
2026-09-25T00:48:22.448Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:22.615Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 149.
2026-09-25T00:48:22.664Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:22.831Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 148.
2026-09-25T00:48:22.882Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:23.089Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 147.
2026-09-25T00:48:23.134Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:23.409Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 146.
2026-09-25T00:48:23.490Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:23.613Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:23.807Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:23.807Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T00:48:24.044Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T00:48:24.044Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T00:48:25.088Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T00:48:25.088Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T00:48:26.090Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:26.192Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}"
2026-09-25T00:48:26.192Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:26.192Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.314Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:26.314Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.408Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.489Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:26.508Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}"
2026-09-25T00:48:26.509Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:26.509Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.703Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:26.704Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.802Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.889Z INFO  Clicking on invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:26.890Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T00:48:27.089Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T00:48:27.089Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:27.198Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:27.496Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:27.496Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:27.521Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T00:48:27.606Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}"
2026-09-25T00:48:27.606Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:27.606Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T00:48:27.890Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:27.890Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T00:48:27.989Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.089Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:28.193Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:28.194Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:28.213Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.306Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}"
2026-09-25T00:48:28.306Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:28.307Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.491Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:28.491Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.512Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.607Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:28.792Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:28.793Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:28.813Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T00:48:28.906Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}"
2026-09-25T00:48:28.906Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:28.906Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.108Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:29.109Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.129Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.207Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:29.391Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:29.391Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:29.411Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.431Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}"
2026-09-25T00:48:29.431Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:29.431Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.607Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:29.608Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.689Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.709Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:29.797Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:29.797Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T00:48:29.816Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T00:48:29.906Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}"
2026-09-25T00:48:29.906Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T00:48:29.906Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T00:48:30.029Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T00:48:30.029Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T00:48:30.107Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T00:48:30.128Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T00:48:30.393Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T00:48:30.393Z DEBUG Raw error message: TypeError: Cannot read properties of undefined (reading 'waitForExist')
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:255:27)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:46:5)
2026-09-25T00:48:30.393Z DEBUG Checking for matching error class in message: TypeError: Cannot read properties of undefined (reading 'waitForExist')
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:255:27)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:46:5)
2026-09-25T00:48:30.394Z DEBUG No matching error class found for: TypeError: Cannot read properties of undefined (reading 'waitForExist')
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:255:27)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:46:5)
2026-09-25T00:48:30.394Z ERROR Unhandled error: TypeError: Cannot read properties of undefined (reading 'waitForExist')
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:255:27)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:46:5)
2026-09-25T00:48:30.394Z DEBUG ErrorManager defined errors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
2026-09-25T00:48:30.394Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T00:48:30.396Z DEBUG CucumberHook: After: 99-data-manager
2026-09-25T00:48:30.399Z DEBUG CucumberHook: After: 01-remote-mobile
2026-09-25T00:48:30.400Z DEBUG CucumberHook: After: 01-browser-log
2026-09-25T00:48:30.400Z DEBUG CucumberHook: After: 10-stdout-logs
---------------------------------------------------------------------------------------------
before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

before  (passed)

given a user with the following criteria: (passed)

and the user accesses to Landing Promotions from dashboard (passed)

and the user "tries to enroll in the promotion" from promotion detail with "single" participant card (passed)

and the user selects participants purchases (failed)

@can not be determined with webdriver.io
stale element reference: stale element reference: stale element not found in the current frame
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.scrollIntoView (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:570:13)
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:257:13)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
when the user removes participants purchases (pending)

then the user sees the following items in the screen: (pending)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

after  (passed)

2026-09-25T01:05:11.857Z DEBUG CucumberHook: Before: 01-browser-log
2026-09-25T01:05:11.858Z DEBUG CucumberHook: Before: 01-session

2026-09-25T01:05:11.859Z DEBUG CucumberHook: Before: 10-storage
2026-09-25T01:05:11.860Z DEBUG CucumberHook: Before: 10-vbank
2026-09-25T01:05:11.861Z DEBUG CucumberHook: Before: 99-data-manager
2026-09-25T01:05:11.862Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T01:05:11.863Z DEBUG Connecting to DM namespace:  GloMo_MX_test_Users
2026-09-25T01:05:11.864Z INFO  [DM] Search Users by tags: ["enrollment_promotion_invitation","after_promotion_period_enrollment","single_participant_card"]
2026-09-25T01:05:11.944Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T01:05:11.944Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T01:05:11.945Z ✔ Given a user with the following criteria: - 🕒 83 ms
2026-09-25T01:05:11.945Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T01:05:11.949Z DEBUG Going to rewardsLanding page from Start page...
2026-09-25T01:05:11.955Z DEBUG Going to Dashboard page from Start page...
2026-09-25T01:05:11.956Z DEBUG Going to Login page from Start page...
2026-09-25T01:05:12.261Z DEBUG Injecting radish's shadow function.
2026-09-25T01:05:12.937Z DEBUG Waiting to load the Login page.
2026-09-25T01:05:12.938Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T01:05:12.939Z DEBUG Injecting radish's shadow function.
2026-09-25T01:05:16.171Z DEBUG Invoking waitForDisplayed for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T01:05:17.062Z INFO  Verifying the text for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T01:05:17.062Z INFO  Getting text for Login:continueButton{#cells-template-login[state="active"] #continueBtn}.
2026-09-25T01:05:17.333Z INFO  [LOGIN] is loaded
2026-09-25T01:05:17.334Z DEBUG Going to Dashboard page from Login page...
2026-09-25T01:05:17.433Z DEBUG Invoking waitForDisplayed for element Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:17.557Z INFO  Writing "6568629678" on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T01:05:17.558Z INFO  Clicking on Login:userInputField{#cells-template-login[state="active"] #user-input-id #input}
2026-09-25T01:05:17.997Z DEBUG Invoking waitForDisplayed for element Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:18.234Z INFO  Writing "8C15319E1CB925D9D52B08DF08E2293A" on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T01:05:18.234Z INFO  Clicking on Login:deviceIdInputField{#cells-template-login[state="active"] #user-input-secondary-id #input}
2026-09-25T01:05:18.734Z DEBUG Invoking waitForClickable for element Login:continueButton{#cells-template-login[state="active"] #continueBtn}: {"timeout":15000,"reverse":false}
2026-09-25T01:05:18.954Z INFO  Clicking on Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T01:05:18.955Z INFO  Scrolling to element Login:continueButton{#cells-template-login[state="active"] #continueBtn}
2026-09-25T01:05:19.434Z DEBUG Invoking waitForDisplayed for element Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:19.557Z INFO  Writing "Glomo2026" on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T01:05:19.557Z INFO  Clicking on Login:pwdInputField{#cells-template-login[state="active"] #user-input-pwd #input}
2026-09-25T01:05:20.034Z DEBUG Invoking waitForDisplayed for element Login:accessButton{#cells-template-login[state="active"] #loginBtn}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T01:05:20.078Z INFO  Clicking on Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T01:05:20.078Z INFO  Scrolling to element Login:accessButton{#cells-template-login[state="active"] #loginBtn}
2026-09-25T01:05:20.555Z INFO  Pause 3000 ms
2026-09-25T01:05:24.058Z DEBUG Waiting to load the Dashboard page.
2026-09-25T01:05:24.058Z DEBUG Invoking waitForDisplayed for element Dashboard:__root{#cells-template-dashboard[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T01:05:25.952Z INFO  [DASHBOARD] is loaded
2026-09-25T01:05:25.952Z DEBUG Going to rewardsLanding page from Dashboard page...
2026-09-25T01:05:25.952Z DEBUG Invoking waitForDisplayed for element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:26.011Z INFO  Clicking on Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T01:05:26.011Z INFO  Scrolling to element Dashboard:futuraYouProducts{#cells-template-dashboard[state="active"] [data-select="futuraDashboard"] #tabs #tab-1}
2026-09-25T01:05:26.193Z DEBUG Invoking waitForDisplayed for element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}: {"timeout":45000,"reverse":false,"failOnError":true}
2026-09-25T01:05:26.666Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T01:05:26.726Z INFO  Clicking on Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T01:05:26.726Z INFO  Scrolling to element Dashboard:rewardsLandingAccess{#cells-template-dashboard[state="active"] [data-tag-name="dashboard-rewards"] .wrapper-dashboard-rewards [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]}
2026-09-25T01:05:27.400Z DEBUG Waiting to load the rewardsLanding page.
2026-09-25T01:05:27.401Z DEBUG Waiting for the bbva-header-main component to be visible.
2026-09-25T01:05:27.401Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-header-main:text{#cells-template-reward[state="active"] [data-tag-name=bbva-header-main][text="rewards-landing-header-title"] .text}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T01:05:27.802Z INFO  [REWARDSLANDING] is loaded
2026-09-25T01:05:27.802Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T01:05:28.376Z INFO  Clicking on rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T01:05:28.376Z INFO  Scrolling to element rewardsLanding:bbva-help-modal:acceptButton{#cells-template-reward[state="active"] [data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-default"].action-button}
2026-09-25T01:05:29.736Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T01:05:29.737Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T01:05:29.812Z INFO  Get all elements for rewardsLanding:bbva-tab-default:tabSecondary{#cells-template-reward[state="active"] [data-tag-name="bbva-tab-default"] #tabs button#tab-1}
2026-09-25T01:05:29.850Z DEBUG Invoking waitForDisplayed for element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T01:05:29.874Z INFO  Clicking on rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:29.874Z INFO  Scrolling to element rewardsLanding:bbva-tab-default:tabSecondary[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:30.037Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T01:05:30.037Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T01:05:30.038Z ✔ And the user accesses to Landing Promotions from dashboard - 🕒 18093 ms
2026-09-25T01:05:30.038Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T01:05:30.040Z DEBUG Going to invitationEnrollmentPromotions page from rewardsLanding page...
2026-09-25T01:05:30.040Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}: {"timeout":90000,"reverse":false,"failOnError":true}
2026-09-25T01:05:30.633Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlide{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active}
2026-09-25T01:05:30.700Z DEBUG Invoking waitForExist for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:31.000Z DEBUG Invoking waitForDisplayed for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:31.161Z INFO  Waiting ("15000" ms) until the element has stopped moving: "rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}"
2026-09-25T01:05:31.161Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 150.
2026-09-25T01:05:31.199Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T01:05:31.360Z DEBUG Checking if element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]} is moving. Tries left: 149.
2026-09-25T01:05:31.401Z INFO  Getting location for element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T01:05:31.461Z DEBUG Element stopped moving: rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T01:05:31.528Z INFO  Clicking on rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T01:05:31.528Z INFO  Scrolling to element rewardsLanding:nextbutton{#cells-template-reward[state="active"] [header-text="Promociones especiales"] [class="chevron-button chevron-next"]}
2026-09-25T01:05:31.685Z DEBUG Generating new element instance from element rewardsLanding:especialPromotionsSlideActive{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="__NAME__"]}: {"placeholder":"__NAME__","value":"Bodega Aurrera"}
2026-09-25T01:05:31.685Z DEBUG Invoking waitForExist for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:31.723Z DEBUG Invoking waitForDisplayed for element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:31.784Z INFO  Clicking on rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T01:05:31.784Z INFO  Scrolling to element rewardsLanding:especialPromotionsSlideActive:::__NAME__->Bodega Aurrera{#cells-template-reward[state="active"] [header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="Bodega Aurrera"]}
2026-09-25T01:05:32.034Z DEBUG Invoking waitForDisplayed for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}: {"timeout":30000,"reverse":false,"failOnError":true}
2026-09-25T01:05:32.158Z INFO  Waiting ("30000" ms) until the element has stopped moving: "rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}"
2026-09-25T01:05:32.158Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 300.
2026-09-25T01:05:32.234Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T01:05:32.454Z DEBUG Checking if element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]} is moving. Tries left: 299.
2026-09-25T01:05:32.564Z INFO  Getting location for element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T01:05:32.757Z DEBUG Element stopped moving: rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T01:05:32.934Z INFO  Clicking on rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T01:05:32.934Z INFO  Scrolling to element rewardsLanding:promotionDetail.continueToInvitationEnrollmentButton{#cells-template-reward[state="active"] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]}
2026-09-25T01:05:33.233Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T01:05:33.234Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T01:05:34.735Z DEBUG Waiting to load the invitationEnrollmentPromotions page.
2026-09-25T01:05:34.736Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:no-name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"]}: {"timeout":180000,"reverse":false,"failOnError":true}
2026-09-25T01:05:34.856Z INFO  [INVITATIONENROLLMENTPROMOTIONS] is loaded
2026-09-25T01:05:34.856Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalActivatePromotion.cardSingle.name{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-step"][id="step-1"][active] .content [data-tag-name="rewards-promotions-invitation-enrollment-participating-card-detail"]:nth-of-type(1) .name}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:34.936Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:35.059Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}"
2026-09-25T01:05:35.059Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 150.
2026-09-25T01:05:35.235Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T01:05:35.453Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]} is moving. Tries left: 149.
2026-09-25T01:05:35.535Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T01:05:35.662Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T01:05:35.751Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T01:05:35.751Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.continueButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="rewards-promotions-invitation-enrollment-enrollment-modal-step-one-button-text"]}
2026-09-25T01:05:36.018Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T01:05:36.018Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T01:05:36.019Z ✔ And the user "tries to enroll in the promotion" from promotion detail with "single" participant card - 🕒 5981 ms
2026-09-25T01:05:36.019Z DEBUG @wdio/utils:shim: Finished to run "beforeStep" hook in 0ms
2026-09-25T01:05:36.019Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:36.597Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}"
2026-09-25T01:05:36.597Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 150.
2026-09-25T01:05:36.645Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:36.811Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 149.
2026-09-25T01:05:36.860Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.032Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 148.
2026-09-25T01:05:37.082Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.265Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 147.
2026-09-25T01:05:37.315Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.488Z DEBUG Checking if element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]} is moving. Tries left: 146.
2026-09-25T01:05:37.541Z INFO  Getting location for element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.611Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.678Z INFO  Clicking on invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.678Z INFO  Scrolling to element invitationEnrollmentPromotions:modalActivatePromotion.selectPurchaseButton{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-enrollment-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="rewards-promotions-invitation-enrollment-button-link"] [data-tag-name="bbva-type-text"]}
2026-09-25T01:05:37.847Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T01:05:37.847Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T01:05:38.849Z INFO  Waiting until the spinner invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil} appears and disappears.
2026-09-25T01:05:38.849Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:spinner{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] cells-spinner-veil}: {"timeout":1000,"reverse":false,"failOnError":false}
2026-09-25T01:05:39.849Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:39.896Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}"
2026-09-25T01:05:39.896Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:39.896Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.054Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:40.054Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.079Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.150Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:40.173Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}"
2026-09-25T01:05:40.173Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:40.173Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.294Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:40.294Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.357Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.378Z INFO  Clicking on invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.378Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[0]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.534Z INFO  Waiting until a custom condition is met. async () => {
        const elements = await element.elements();
        return elements.length > 0;
      }
2026-09-25T01:05:40.534Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:40.637Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:40.736Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:40.737Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:40.758Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.833Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}"
2026-09-25T01:05:40.834Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:40.834Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.963Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:40.963Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T01:05:40.987Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[1]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.055Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:41.133Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:41.134Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:41.157Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.178Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}"
2026-09-25T01:05:41.178Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:41.178Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.435Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:41.435Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.455Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[2]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.633Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:41.733Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:41.734Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:41.753Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.788Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}"
2026-09-25T01:05:41.788Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:41.788Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T01:05:41.954Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:41.954Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.050Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[3]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.134Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:42.234Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:42.234Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:42.257Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.350Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}"
2026-09-25T01:05:42.351Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:42.351Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.551Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:42.552Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.644Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[4]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.733Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:42.835Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:42.836Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:42.858Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T01:05:42.954Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}"
2026-09-25T01:05:42.954Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:42.954Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.152Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:43.153Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.234Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[5]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.257Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:43.441Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:43.441Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:43.534Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.557Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}"
2026-09-25T01:05:43.557Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:43.558Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.752Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:43.752Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.850Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[6]]{No selector, element was build programmatically.}
2026-09-25T01:05:43.870Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:44.037Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:44.037Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:44.060Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.134Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}"
2026-09-25T01:05:44.134Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:44.134Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.286Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:44.286Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.352Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[7]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.374Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:44.540Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:44.541Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:44.563Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.650Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}"
2026-09-25T01:05:44.650Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:44.650Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.834Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:44.834Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.851Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[8]]{No selector, element was build programmatically.}
2026-09-25T01:05:44.874Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:45.037Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:45.038Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:45.059Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}
2026-09-25T01:05:45.133Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}"
2026-09-25T01:05:45.134Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:45.134Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}
2026-09-25T01:05:45.333Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:45.333Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}
2026-09-25T01:05:45.352Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[9]]{No selector, element was build programmatically.}
2026-09-25T01:05:45.451Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:45.750Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:45.751Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:45.834Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}
2026-09-25T01:05:45.856Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}"
2026-09-25T01:05:45.856Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:45.856Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.050Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:46.050Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.133Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[10]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.158Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:46.357Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:46.357Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:46.547Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.567Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}"
2026-09-25T01:05:46.568Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:46.568Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.760Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:46.761Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.834Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[11]]{No selector, element was build programmatically.}
2026-09-25T01:05:46.858Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:46.953Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:46.954Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:46.977Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.051Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}"
2026-09-25T01:05:47.051Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:47.051Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.234Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:47.235Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.259Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[12]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.353Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:47.547Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:47.548Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:47.633Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.675Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}"
2026-09-25T01:05:47.675Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:47.676Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.858Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:47.859Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}
2026-09-25T01:05:47.951Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[13]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.033Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:48.145Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:48.145Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:48.167Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.258Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}"
2026-09-25T01:05:48.258Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:48.258Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.434Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:48.434Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.459Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[14]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.545Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:48.642Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:48.643Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:48.735Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.753Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}"
2026-09-25T01:05:48.753Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:48.753Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.878Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:48.878Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}
2026-09-25T01:05:48.951Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[15]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.033Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:49.141Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:49.141Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:49.162Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.253Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}"
2026-09-25T01:05:49.253Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:49.254Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.434Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:49.434Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.458Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[16]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.534Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:49.641Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:49.642Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:49.664Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.687Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}"
2026-09-25T01:05:49.688Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:49.688Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.867Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:49.867Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.935Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[17]]{No selector, element was build programmatically.}
2026-09-25T01:05:49.957Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:50.044Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.044Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.066Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.133Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}"
2026-09-25T01:05:50.133Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:50.134Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.258Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:50.259Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.279Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[18]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.357Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:50.442Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.442Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.463Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.486Z INFO  Waiting ("15000" ms) until the element has stopped moving: "invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}"
2026-09-25T01:05:50.486Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.} is moving. Tries left: 150.
2026-09-25T01:05:50.486Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.650Z DEBUG Checking if element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.} is moving. Tries left: 149.
2026-09-25T01:05:50.651Z INFO  Getting location for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.671Z DEBUG Element stopped moving: invitationEnrollmentPromotions:modalSelectPurchases.checks[[19]]{No selector, element was build programmatically.}
2026-09-25T01:05:50.696Z INFO  Get all elements for invitationEnrollmentPromotions:modalSelectPurchases.checks{#cells-template-rewardsPromotionsInvitationEnrollment[state="active"] [data-tag-name="rewards-promotions-invitation-enrollment-purchases-modal"][visible] [data-tag-name="bbva-form-control-input"][type="checkbox"]}
2026-09-25T01:05:50.848Z DEBUG Invoking waitForExist for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[20]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.848Z DEBUG Invoking waitForDisplayed for element invitationEnrollmentPromotions:modalSelectPurchases.checks[[20]]{No selector, element was build programmatically.}: {"timeout":15000,"reverse":false,"failOnError":true}
2026-09-25T01:05:50.907Z INFO  Scrolling to element invitationEnrollmentPromotions:modalSelectPurchases.checks[[20]]{No selector, element was build programmatically.}
2026-09-25T01:05:51.045Z DEBUG CucumberHook: AfterStep: 01-fatal-error-log
2026-09-25T01:05:51.045Z DEBUG Raw error message: stale element reference: stale element reference: stale element not found in the current frame
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.scrollIntoView (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:570:13)
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:257:13)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T01:05:51.045Z DEBUG Checking for matching error class in message: stale element reference: stale element reference: stale element not found in the current frame
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.scrollIntoView (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:570:13)
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:257:13)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T01:05:51.045Z DEBUG No matching error class found for: stale element reference: stale element reference: stale element not found in the current frame
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.scrollIntoView (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:570:13)
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:257:13)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T01:05:51.045Z ERROR Unhandled error: stale element reference: stale element reference: stale element not found in the current frame
  (Session info: chrome=136.0.7103.113)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Proxy.scrollIntoView (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/node_modules/.pnpm/@csqe+radish@7.5.1_@cucumber+cucumber@11.3.0_@cucumber+message-streams@4.0.1_@cucumber+_c47b6c2430e339a657d2f2847a8044e3/node_modules/@csqe/radish/src/testable/BaseElement.js:570:13)
    at Proxy.scrollShopping (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:257:13)
    at Proxy.selectPurchases (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/pages/reward/invitationEnrollmentPromotions.js:242:9)
    at RadishWorld.<anonymous> (/home/jenkins/agent/workspace/n_Without_Analytics_html_PR-9664/REGRESSION_SPHERICA/Regression_Without_Analytics/html/PR-9664/test/e2e/lib/features/step_definitions/reward/invitationEnrollmentPromotions.js:41:5)
2026-09-25T01:05:51.045Z DEBUG ErrorManager defined errors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
2026-09-25T01:05:51.046Z DEBUG @wdio/utils:shim: Finished to run "afterStep" hook in 0ms
2026-09-25T01:05:51.047Z DEBUG CucumberHook: After: 99-data-manager
2026-09-25T01:05:51.052Z DEBUG CucumberHook: After: 01-remote-mobile
2026-09-25T01:05:51.053Z DEBUG CucumberHook: After: 01-browser-log
2026-09-25T01:05:51.053Z DEBUG CucumberHook: After: 10-stdout-logs
