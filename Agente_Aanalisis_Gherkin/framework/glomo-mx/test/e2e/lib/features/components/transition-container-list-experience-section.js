import AbstractGlomoComponent from './abstract-glomo-component';

export default class TransitionContainerExperienceSection extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'div.__modals-container',
            elements: {
                headerTransaction: '.modal-header .header-slot [data-tag-name="bbva-header-main"]',
                backButtonList: '.modal-header .header-slot [data-tag-name="bbva-header-main"] #btn-back',
                listContent: '[data-tag-name="app-info-structure-experiences-section-gl-list"]',
                titleListExperienceSection: '.modal-header .header-slot [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                menuListExperienceSection: '.modal-header .header-slot [data-tag-name="bbva-header-main"] #btn-menu',
                firstItemListTitle: '[data-tag-name="app-info-structure-experiences-section-gl-list"] [data-tag-name="bbva-panel-container"] [data-tag-name="app-info-structure-experiences-section-gl-card"]',
            },
            requiredElements: [
                'headerTransaction',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: '#experiencesSection',
            isWithoutRoot: true,
        };
    }

}
