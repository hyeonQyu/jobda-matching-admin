import { Datetime } from '@models/Datetime';

export interface RecruitNoticeInfo {
    title: string;
    job: string;
    companyName: string;
    recruitSectorName: string;
    location: string;
    registrationDatetime: Datetime;
    recruitNoticeUrl: string;
}
