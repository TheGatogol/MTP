import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class ChecklistActions extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checklistActions/checklistActions', parentNavigation: 'dashboard'});
    }
}

export default new ChecklistActions();
