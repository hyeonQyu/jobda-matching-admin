import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import style from './Layout.scss';
import Sidebar from '@components/sidebar/Sidebar';

export interface LayoutProps {
    children: ReactNode;
}

const Layout = observer((props: LayoutProps) => {
    const { children } = props;

    return (
        <div className={style.wrapper}>
            <div id={'sidebar'} className={style.sidebar}>
                <Sidebar />
            </div>
            {children}
        </div>
    );
});

export default Layout;
