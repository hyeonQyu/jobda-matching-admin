import React, { useEffect, useState } from 'react';
import Edit from '@pages/Edit';
import { observer } from 'mobx-react';
import Store from '@stores/Store';
import { StoreContext } from '@contexts/StoreContext';
import CompanyEditStore from '@stores/CompanyEditStore';

const App = observer(() => {
    const [store] = useState(new Store());
    const [companyEditStore] = useState(new CompanyEditStore(store));

    useEffect(() => {
        store.load();
    }, []);

    return (
        <StoreContext.Provider value={{ store, companyEditStore }}>
            <Edit />
        </StoreContext.Provider>
    );
});

export default App;
