import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import JobGroupCardList from '@components/job-group/components/card/JobGroupCardList';
import JobGroupDetailsList from '@components/job-group/components/details/JobGroupDetailsList';

export interface JobGroupProps {}

const JobGroup = (props: JobGroupProps) => {
    const {} = props;
    const jobGroupList = [
        {
            name: '영업',
            recruitNoticeList: [
                {
                    title: '국내영업 담당',
                    job: '일반영업, 기술영업',
                    companyName: '(주)코스메카코리아',
                    recruitSectorName: '신입',
                    registrationDatetime: {
                        year: 2022,
                        month: 3,
                        date: 31,
                    },
                    location: '경기도',
                    recruitNoticeUrl: 'https://www.jobda.im/match/position/197/jd',
                },
            ],
        },
    ];
    return (
        <div id={'jmf_body_sec02'}>
            <p className={classNames(style.text_04, style.mb3)}>(2022.04.01 기준)</p>
            <p className={classNames(style.title_06)}>11개 직군💼, 65개 직무로 취업을 잡다🔍</p>
            <p className={classNames(style.text_04, style.mb3)}>가고 싶은 직군을 클릭해보세요🖱</p>

            <JobGroupCardList jobGroupList={jobGroupList} />
            <JobGroupDetailsList jobGroupList={jobGroupList} />
        </div>
    );
};

export default JobGroup;
