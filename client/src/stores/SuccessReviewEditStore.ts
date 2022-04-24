import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import { SuccessStoryInfo } from '@models/SuccessStoryInfo';
import Store from '@stores/Store';

@autobind
export default class SuccessReviewEditStore {
    @observable private _isEditingSuccessStory: boolean = false;
    @observable private _successStory: SuccessStoryInfo = {
        title: '',
        companyName: '',
        userId: '',
        companyImgSrc: '',
        description: '',
    };

    private readonly _store: Store;

    constructor(store: Store) {
        this._store = store;
    }

    get isEditingSuccessStory(): boolean {
        return this._isEditingSuccessStory;
    }

    get successStory(): SuccessStoryInfo {
        return this._successStory;
    }

    @action
    startEditSuccessStory() {
        this._isEditingSuccessStory = true;
    }

    @action
    setSuccessStoryTitle(title: string) {
        this._successStory.title = title;
    }

    @action
    setSuccessStoryCompanyName(name: string) {
        this._successStory.companyName = name;
    }

    @action
    setSuccessStoryUserId(id: string) {
        this._successStory.userId = id;
    }

    @action
    setSuccessStoryCompanyImgSrc(imgSrc: string) {
        this._successStory.companyImgSrc = imgSrc;
    }

    @action
    setSuccessStoryDescription(description: string) {
        this._successStory.description = description;
    }

    @action
    addSuccessStory() {
        this._store.addSuccessStory(this.successStory);
        this.finishEditSuccessStory();
    }

    @action
    deleteSuccessStory() {
        this._store.deleteSuccessStory(this.successStory);
    }

    @action
    finishEditSuccessStory() {
        this._isEditingSuccessStory = false;
        this._successStory = {
            title: '',
            companyName: '',
            userId: '',
            companyImgSrc: '',
            description: '',
        };
    }
}
