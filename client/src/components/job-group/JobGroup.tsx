import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import JobGroupCardList from '@components/job-group/components/card/JobGroupCardList';
import JobGroupDetailsList from '@components/job-group/components/details/JobGroupDetailsList';
import useTodayDateFormat from '@hooks/useTodayDateFormat';

const JobGroup = () => {
    const { datetimeFormat } = useTodayDateFormat();

    return (
        <div id={'jmf_body_sec02'}>
            <p className={classNames(style.text_04, style.mb3)}>({datetimeFormat} 기준)</p>
            <p className={classNames(style.title_06)}>11개 직군💼, 65개 직무로 취업을 잡다🔍</p>
            <p className={classNames(style.text_04, style.mb3)}>가고 싶은 직군을 클릭해보세요🖱</p>

            <JobGroupCardList />
            <JobGroupDetailsList />
        </div>
    );
};

export default JobGroup;
