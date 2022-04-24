import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import Store from '@stores/Store';
import EditStore from '@stores/EditStore';

@autobind
export default class CompanyEditStore extends EditStore {
    @observable private _name: string = '';

    constructor(store: Store) {
        super(store);
    }

    get name(): string {
        return this._name;
    }

    @action
    setName(name: string) {
        this._name = name;
    }

    @action
    addCompany() {
        this._store.addCompany({
            url: `https://www.jobda.im/match/position?keyword=${this.name}`,
            imgSrc: `https://www.midashri.com/hubfs/${new Date().getFullYear()}JMF/logo/${this.name}.png`,
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
        this.setName('');
    }
}
