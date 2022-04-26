import { AxiosPromise } from 'axios';
import { Client } from '@requests/common/client';
import { UnionDataVO } from '@models/UnionDataVO';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';

export namespace Request {
    const client = new Client('/');

    /**
     * 데이터 불러오기
     */
    export function load(): AxiosPromise<UnionDataVO> {
        return client.get('/load');
    }

    /**
     * 수정사항 저장하기
     * @param req
     */
    export function save(req: UnionDataVO): AxiosPromise<boolean> {
        return client.post('/save', req);
    }

    /**
     * 채용공고 URL을 통해 공고 정보 얻어오기
     * @param url
     */
    export function getRecruitNoticeInfoByUrl(url: string): AxiosPromise<RecruitNoticeInfo> {
        return client.post('/getRecruitNoticeInfoByUrl', { url });
    }

    /**
     * HTML 파일 추출하기
     * @param html
     */
    export function extractHtml(html: string): AxiosPromise<boolean> {
        return client.post('/extractHtml', { html });
    }
}
