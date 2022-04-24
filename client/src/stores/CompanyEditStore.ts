import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import Store from '@stores/Store';

@autobind
export default class CompanyEditStore {
    @observable private _isEditing: boolean = false;
    @observable private _name: string = '';

    private readonly _store: Store;

    constructor(store: Store) {
        this._store = store;
    }

    get isEditing(): boolean {
        return this._isEditing;
    }

    get name(): string {
        return this._name;
    }

    @action
    startEdit() {
        this._isEditing = true;
    }

    @action
    setName(name: string) {
        this._name = name;
    }

    @action
    addCompany(companyName: string) {
        this._store.addCompany({
            url: `https://www.jobda.im/match/position?keyword=${companyName}`,
            imgSrc: `https://www.midashri.com/hubfs/${new Date().getFullYear()}JMF/logo/${companyName}.png`,
        });

        this._isEditing = false;
        this.setName('');
    }

    @action
    deleteCompany(url: string) {
        this._store.deleteCompany(url);
    }
}
