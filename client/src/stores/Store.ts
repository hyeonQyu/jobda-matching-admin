import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import { CompanyInfo } from '@models/CompanyInfo';
import { JobGroupInfo } from '@models/JobGroupInfo';
import { Request } from '@requests/Request';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import { SuccessStoryInfo } from '@models/SuccessStoryInfo';

@autobind
export default class Store {
    @observable private _companyList: CompanyInfo[] = [];
    @observable private _jobGroupList: JobGroupInfo[] = [];
    @observable private _successStoryList: SuccessStoryInfo[] = [];

    @observable private _isEditMode: boolean = true;

    get companyList(): CompanyInfo[] {
        return this._companyList;
    }

    get jobGroupList(): JobGroupInfo[] {
        return this._jobGroupList;
    }

    get successStoryList(): SuccessStoryInfo[] {
        return this._successStoryList;
    }

    get isEditMode(): boolean {
        return this._isEditMode;
    }

    @action
    setIsEditMode(isEdit: boolean) {
        this._isEditMode = isEdit;
    }

    @action
    addCompany(companyInfo: CompanyInfo) {
        this._companyList.push(companyInfo);
    }

    @action
    addJobGroup(jobGroup: JobGroupInfo) {
        this._jobGroupList.push(jobGroup);
    }

    @action
    addRecruitNotice(recruitNotice: RecruitNoticeInfo, jobGroupName: string) {
        const newJobGroup: JobGroupInfo = this._jobGroupList.filter(({ name }) => name === jobGroupName)[0];
        newJobGroup.recruitNoticeList.push(recruitNotice);
    }

    @action
    deleteCompany(url: string) {
        this._companyList = this.companyList.filter((company) => {
            return url !== company.url;
        });
    }

    @action
    deleteJobGroup(name: string) {
        this._jobGroupList = this.jobGroupList.filter((jobGroup) => {
            return jobGroup.name !== name;
        });
    }

    @action
    deleteRecruitNotice(jobGroupName: string, recruitNoticeUrl: string) {
        for (let i = 0; i < this.jobGroupList.length; i++) {
            const jobGroup = this.jobGroupList[i];
            if (jobGroup.name === jobGroupName) {
                jobGroup.recruitNoticeList = jobGroup.recruitNoticeList.filter((recruitNotice) => {
                    return recruitNotice.recruitNoticeUrl !== recruitNoticeUrl;
                });
                return;
            }
        }
    }

    @action
    async load() {
        const { data } = await Request.load();
        const { companyList, jobGroupList, successStoryList } = data;

        this._companyList = companyList;
        this._jobGroupList = jobGroupList;
        this._successStoryList = successStoryList;
    }

    @action
    async save() {
        const { jobGroupList, companyList, successStoryList } = this;

        const { data } = await Request.save({
            companyList,
            jobGroupList,
            successStoryList,
        });

        if (data) {
            alert('저장 성공');
            return;
        }
        alert('저장 실패ㅠㅠ 문의주세용..');
    }
}
