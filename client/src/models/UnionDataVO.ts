import { CompanyInfo } from '@models/CompanyInfo';
import { JobGroupInfo } from '@models/JobGroupInfo';

export interface UnionDataVO {
    companyList: CompanyInfo[];
    jobGroupList: JobGroupInfo[];
}
