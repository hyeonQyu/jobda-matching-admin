import { autobind } from 'core-decorators';
import Store from '@stores/Store';
import { action, observable } from 'mobx';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';

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
    };

    @observable
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
    setRecruitNoticeTitle(title: string) {
        this._recruitNotice.title = title;
    }

    @action
    setRecruitNoticeJob(job: string) {
        this._recruitNotice.job = job;
    }

    @action
    setRecruitNoticeCompanyName(name: string) {
        this._recruitNotice.companyName = name;
    }

    @action
    setRecruitNoticeRecruitSectorName(name: string) {
        this._recruitNotice.recruitSectorName = name;
    }

    @action
    setRecruitNoticeLocation(location: string) {
        this._recruitNotice.location = location;
    }

    @action
    setRecruitNoticeRegistrationDateYear(year: string) {
        this._recruitNotice.registrationDatetime = {
            ...this.recruitNotice.registrationDatetime,
            year: parseInt(year),
        };
    }

    @action
    setRecruitNoticeRegistrationDateMonth(month: string) {
        this._recruitNotice.registrationDatetime = {
            ...this.recruitNotice.registrationDatetime,
            month: parseInt(month),
        };
    }

    @action
    setRecruitNoticeRegistrationDateDate(date: string) {
        this._recruitNotice.registrationDatetime = {
            ...this.recruitNotice.registrationDatetime,
            date: parseInt(date),
        };
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
    addRecruitNotice() {
        this._store.addRecruitNotice(this.recruitNotice, this.editingJobGroupNameOfRecruitNotice);
        this.finishEditRecruitNotice();
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
        };
    }
}
