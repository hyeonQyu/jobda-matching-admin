import { AxiosPromise } from 'axios';
import { CompanyInfo } from '@models/CompanyInfo';
import { Client } from '@requests/common/client';

export namespace Request {
    const client = new Client('/');

    export function getCompanyList(): AxiosPromise<CompanyInfo[]> {
        return client.get('/getCompanyList');
    }
}
