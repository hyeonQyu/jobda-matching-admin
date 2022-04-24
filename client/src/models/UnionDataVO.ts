import { CompanyInfo } from '@models/CompanyInfo';
import { JobGroupInfo } from '@models/JobGroupInfo';
import { SuccessStoryInfo } from '@models/SuccessStoryInfo';

export interface UnionDataVO {
    companyList: CompanyInfo[];
    jobGroupList: JobGroupInfo[];
    successStoryList: SuccessStoryInfo[];
    youtubeVideoSrcList: string[];
}
