import React, { useEffect, useState } from 'react';
import Edit from '@pages/Edit';
import { observer } from 'mobx-react';
import Store from '@stores/Store';
import { StoreContext } from '@contexts/StoreContext';
import CompanyEditStore from '@stores/CompanyEditStore';
import JobGroupEditStore from '@stores/JobGroupEditStore';

const App = observer(() => {
    const [store] = useState(new Store());
    const [companyEditStore] = useState(new CompanyEditStore(store));
    const [jobGroupEditStore] = useState(new JobGroupEditStore(store));

    useEffect(() => {
        store.load();
    }, []);

    return (
        <StoreContext.Provider value={{ store, companyEditStore, jobGroupEditStore }}>
            <Edit />
        </StoreContext.Provider>
    );
});

export default App;
