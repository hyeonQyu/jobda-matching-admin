import { autobind } from 'core-decorators';
import Store from '@stores/Store';
import EditStore from '@stores/EditStore';
import { action, observable } from 'mobx';

@autobind
export default class JobGroupEditStore extends EditStore {
    @observable private _jobGroupName: string = '';

    constructor(store: Store) {
        super(store);
    }

    get jobGroupName(): string {
        return this._jobGroupName;
    }

    @action
    setJobGroupName(name: string) {
        this._jobGroupName = name;
    }

    @action
    addJobGroup() {
        this._store.addJobGroup({
            name: this.jobGroupName,
            recruitNoticeList: [],
        });

        this.finishEdit();
    }

    @action
    finishEdit() {
        this._isEditing = false;
        this.setJobGroupName('');
    }
}
