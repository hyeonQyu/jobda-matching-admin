import React, { useEffect, useState } from 'react';
import Edit from '@pages/Edit';
import { observer } from 'mobx-react';
import Store from '@stores/Store';
import { StoreContext } from '@contexts/StoreContext';

const App = observer(() => {
    const [store] = useState(new Store());

    useEffect(() => {
        store.load();
    }, []);

    return (
        <StoreContext.Provider value={store}>
            <Edit />
        </StoreContext.Provider>
    );
});

export default App;
