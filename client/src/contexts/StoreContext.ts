import React from 'react';
import Store from '@stores/Store';
import CompanyEditStore from '@stores/CompanyEditStore';
import JobGroupEditStore from '@stores/JobGroupEditStore';

export interface IStoreContext {
    store: Store;
    companyEditStore: CompanyEditStore;
    jobGroupEditStore: JobGroupEditStore;
}

export const StoreContext = React.createContext<IStoreContext>(null);

export const useStore = () => React.useContext(StoreContext);
