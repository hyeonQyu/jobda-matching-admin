import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import { CompanyInfo } from '@models/CompanyInfo';
import { JobGroupInfo } from '@models/JobGroupInfo';
import { Request } from '@requests/Request';

@autobind
export default class Store {
    @observable private _companyList: CompanyInfo[] = [];
    @observable private _jobGroupList: JobGroupInfo[] = [];

    @observable private _isEditMode: boolean = true;

    get companyList(): CompanyInfo[] {
        return this._companyList;
    }

    get jobGroupList(): JobGroupInfo[] {
        return this._jobGroupList;
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
    async load() {
        const { data } = await Request.load();
        const { companyList, jobGroupList } = data;

        this._companyList = companyList;
        this._jobGroupList = jobGroupList;
    }

    @action
    async save() {
        const { jobGroupList, companyList } = this;

        const { data } = await Request.save({
            companyList,
            jobGroupList,
        });

        if (data) {
            alert('저장 성공');
            return;
        }
        alert('저장 실패ㅠㅠ 문의주세용..');
    }
}
