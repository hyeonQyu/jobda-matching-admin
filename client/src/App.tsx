import React, { useEffect } from 'react';
import Edit from '@pages/Edit';
import { observer } from 'mobx-react';
import { useStore } from '@contexts/StoreContext';

const App = observer(() => {
    const store = useStore();

    useEffect(() => {
        store.load();
    }, []);

    return <Edit />;
});

export default App;
