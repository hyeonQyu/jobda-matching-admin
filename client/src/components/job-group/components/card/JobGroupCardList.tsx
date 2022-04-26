import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import CharacterIcon from '@icons/CharacterIcon';
import JobGroupCard from '@components/job-group/components/card/JobGroupCard';
import useNumberFormat from '@hooks/useNumberFormat';
import { observer } from 'mobx-react';
import { useStore } from '@contexts/StoreContext';
import CardAdd from '@components/common/card-add/CardAdd';
import CardAddForm from '@components/common/card-add-form/CardAddForm';

const JobGroupCardList = observer(() => {
    const { store, jobGroupEditStore } = useStore();
    const { jobGroupList, isEditMode } = store;
    const { startEditJobGroup, isEditingJobGroup, jobGroupName, setJobGroupName, addJobGroup, finishEditJobGroup } = jobGroupEditStore;
    const { withDigitLength } = useNumberFormat();

    return (
        <>
            <div className={classNames(style.jmf_item_list_wrap, style.jmf_web)}>
                <CharacterIcon />
                {jobGroupList.map((jobGroup, index) => (
                    <JobGroupCard href={`#job_type${withDigitLength(index + 1, 2)}`} jobGroup={jobGroup} key={jobGroup.name} />
                ))}

                {isEditMode && !isEditingJobGroup && <CardAdd onClick={startEditJobGroup} />}
            </div>

            {isEditMode && isEditingJobGroup && (
                <CardAddForm
                    text={jobGroupName}
                    setText={setJobGroupName}
                    placeholder={'직군 입력'}
                    onSubmit={addJobGroup}
                    onCancel={finishEditJobGroup}
                />
            )}
        </>
    );
});

export default JobGroupCardList;
