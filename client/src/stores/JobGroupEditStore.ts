import { autobind } from 'core-decorators';
import Store from '@stores/Store';
import { action, observable } from 'mobx';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import { Request } from '@requests/Request';

@autobind
export default class JobGroupEditStore {
    @observable private _isEditingJobGroup: boolean = false;
    @observable private _jobGroupName: string = '';

    @observable private _isEditingRecruitNotice: boolean = false;
    @observable private _editingJobGroupNameOfRecruitNotice: string = '';
    @observable private _recruitNotice: RecruitNoticeInfo = {
        title: '',
        job: '',
        companyName: '',
        recruitSectorName: '',
        location: '',
        registrationDatetime: {
            year: 0,
            month: 0,
            date: 0,
        },
        recruitNoticeUrl: '',
        isNew: true,
    };

    private readonly _store: Store;

    constructor(store: Store) {
        this._store = store;
    }

    get isEditingJobGroup(): boolean {
        return this._isEditingJobGroup;
    }

    get jobGroupName(): string {
        return this._jobGroupName;
    }

    get isEditingRecruitNotice(): boolean {
        return this._isEditingRecruitNotice;
    }

    get editingJobGroupNameOfRecruitNotice(): string {
        return this._editingJobGroupNameOfRecruitNotice;
    }

    get recruitNotice(): RecruitNoticeInfo {
        return this._recruitNotice;
    }

    @action
    startEditJobGroup() {
        this._isEditingJobGroup = true;
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

        this.finishEditJobGroup();
    }

    @action
    deleteJobGroup(name: string) {
        this._store.deleteJobGroup(name);
    }

    @action
    finishEditJobGroup() {
        this._isEditingJobGroup = false;
        this.setJobGroupName('');
    }

    @action
    setRecruitNoticeUrl(url: string) {
        this._recruitNotice.recruitNoticeUrl = url;
    }

    @action
    startEditRecruitNotice(jobGroupName: string) {
        this._isEditingRecruitNotice = true;
        this._editingJobGroupNameOfRecruitNotice = jobGroupName;
    }

    @action
    async addRecruitNotice() {
        try {
            const { data } = await Request.getRecruitNoticeInfoByUrl(this.recruitNotice.recruitNoticeUrl);
            this._store.addRecruitNotice(data, this.editingJobGroupNameOfRecruitNotice);
            this.finishEditRecruitNotice();
        } catch (e) {
            alert('문제 발생.. 문의주세요ㅠ');
        }
    }

    @action
    finishEditRecruitNotice() {
        this._isEditingRecruitNotice = false;
        this._recruitNotice = {
            title: '',
            job: '',
            companyName: '',
            recruitSectorName: '',
            location: '',
            registrationDatetime: {
                year: 0,
                month: 0,
                date: 0,
            },
            recruitNoticeUrl: '',
            isNew: true,
        };
    }

    @action
    deleteRecruitNotice(jobGroupName: string, recruitNoticeUrl: string) {
        this._store.deleteRecruitNotice(jobGroupName, recruitNoticeUrl);
    }
}
