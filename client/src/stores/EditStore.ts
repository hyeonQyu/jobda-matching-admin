import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import Store from '@stores/Store';

@autobind
export default abstract class EditStore {
    @observable protected _isEditing: boolean = false;

    protected readonly _store: Store;

    protected constructor(store: Store) {
        this._store = store;
    }

    get isEditing(): boolean {
        return this._isEditing;
    }

    @action
    startEdit() {
        this._isEditing = true;
    }
}
