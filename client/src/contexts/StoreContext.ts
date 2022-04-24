import React from 'react';
import Store from '@stores/Store';
import CompanyEditStore from '@stores/CompanyEditStore';

export interface IStoreContext {
    store: Store;
    companyEditStore: CompanyEditStore;
}

export const StoreContext = React.createContext<IStoreContext>(null);

export const useStore = () => React.useContext(StoreContext);
