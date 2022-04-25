import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import Store from '@stores/Store';
import EditStore from '@stores/EditStore';

@autobind
export default class CompanyEditStore extends EditStore {
    @observable private _nameOfJobda: string = '';
    @observable private _nameOfImage: string = '';

    constructor(store: Store) {
        super(store);
    }

    get nameOfJobda(): string {
        return this._nameOfJobda;
    }

    get nameOfImage(): string {
        return this._nameOfImage;
    }

    @action
    setNameOfJobda(name: string) {
        this._nameOfJobda = name;
    }

    @action
    setNameOfImage(name: string) {
        this._nameOfImage = name;
    }

    @action
    addCompany() {
        this._store.addCompany({
            url: `https://www.jobda.im/match/position?keyword=${this.nameOfJobda}`,
            imgSrc: `https://www.midashri.com/hubfs/${new Date().getFullYear()}JMF/logo/${this.nameOfImage || this.nameOfJobda}.png`,
        });

        this.finishEdit();
    }

    @action
    deleteCompany(url: string) {
        this._store.deleteCompany(url);
    }

    @action
    finishEdit() {
        this._isEditing = false;
        this.setNameOfJobda('');
        this.setNameOfImage('');
    }
}
