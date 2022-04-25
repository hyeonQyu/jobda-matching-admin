import React, { useEffect, useState } from 'react';
import Html from '@pages/Edit';
import { observer } from 'mobx-react';
import Store from '@stores/Store';
import { StoreContext } from '@contexts/StoreContext';
import CompanyEditStore from '@stores/CompanyEditStore';
import JobGroupEditStore from '@stores/JobGroupEditStore';
import SuccessReviewEditStore from '@stores/SuccessReviewEditStore';
import Layout from '@components/layout/Layout';

const App = observer(() => {
    const [store] = useState(new Store());
    const [companyEditStore] = useState(new CompanyEditStore(store));
    const [jobGroupEditStore] = useState(new JobGroupEditStore(store));
    const [successReviewEditStore] = useState(new SuccessReviewEditStore(store));

    useEffect(() => {
        store.load();
    }, []);

    return (
        <StoreContext.Provider value={{ store, companyEditStore, jobGroupEditStore, successReviewEditStore }}>
            <Layout>
                <Html />
            </Layout>
        </StoreContext.Provider>
    );
});

export default App;
