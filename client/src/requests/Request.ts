import { AxiosPromise } from 'axios';
import { Client } from '@requests/common/client';
import { UnionDataVO } from '@models/UnionDataVO';

export namespace Request {
    const client = new Client('/');

    export function load(): AxiosPromise<UnionDataVO> {
        return client.get('/load');
    }

    export function save(req: UnionDataVO): AxiosPromise<boolean> {
        return client.post('/save', req);
    }
}
