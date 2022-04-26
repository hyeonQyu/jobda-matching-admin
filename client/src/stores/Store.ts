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
    @observable private _youtubeVideoSrcList: string[] = [];

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

    get youtubeVideoSrcList(): string[] {
        return this._youtubeVideoSrcList;
    }

    get isEditMode(): boolean {
        return this._isEditMode;
    }

    setRecruitNoticeOfJobGroup(jobGroupIndex: number, recruitNoticeList: RecruitNoticeInfo[]) {
        this.jobGroupList[jobGroupIndex].recruitNoticeList = recruitNoticeList;
    }

    @action
    toggleEditMode() {
        this._isEditMode = !this.isEditMode;
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
    addSuccessStory(successStory: SuccessStoryInfo) {
        this._successStoryList.push(successStory);
    }

    @action
    addYoutubeVideo(videoSrc: string) {
        this._youtubeVideoSrcList.push(videoSrc);
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
    deleteSuccessStory(successStory: SuccessStoryInfo) {
        this._successStoryList = this.successStoryList.filter(({ title, userId, companyName, description }) => {
            return (
                title !== successStory.title ||
                userId !== successStory.userId ||
                companyName !== successStory.companyName ||
                description !== successStory.description
            );
        });
    }

    @action
    deleteYoutubeVideo(videoSrc: string) {
        this._youtubeVideoSrcList = this.youtubeVideoSrcList.filter((src) => src !== videoSrc);
    }

    @action
    checkIsRecruitNoticeNew(jobGroupName: string, recruitNoticeIndex: number) {
        for (let i = 0; i < this.jobGroupList.length; i++) {
            const jobGroup = this.jobGroupList[i];
            if (jobGroup.name === jobGroupName) {
                const recruitNotice = jobGroup.recruitNoticeList[recruitNoticeIndex];
                recruitNotice.isNew = !recruitNotice.isNew;
            }
        }
    }

    @action
    async load() {
        const { data } = await Request.load();
        const { companyList, jobGroupList, successStoryList, youtubeVideoSrcList } = data;

        this._companyList = companyList;
        this._jobGroupList = jobGroupList;
        this._successStoryList = successStoryList;
        this._youtubeVideoSrcList = youtubeVideoSrcList;
    }

    @action
    async reset() {
        if (confirm('수정사항을 버리고 처음으로 돌아가시겠어요?')) {
            await this.load();
        }
    }

    @action
    async save() {
        const { jobGroupList, companyList, successStoryList, youtubeVideoSrcList } = this;

        const { data } = await Request.save({
            companyList,
            jobGroupList,
            successStoryList,
            youtubeVideoSrcList,
        });

        if (data) {
            alert('저장 성공');
            return;
        }
        alert('저장 실패ㅠㅠ 문의주세용..');
    }
}
