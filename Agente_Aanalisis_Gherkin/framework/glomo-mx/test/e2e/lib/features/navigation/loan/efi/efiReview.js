import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import efi from '../../../pages/loan/efi/efi';

// Page Objects IDs
const EFI_SUMMARY = efi.getId();

class EfiReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/efi/efiReview', parentNavigation: 'loan/efi/efi'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EFI_SUMMARY:
                await efi.accessToContract();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EfiReview();
