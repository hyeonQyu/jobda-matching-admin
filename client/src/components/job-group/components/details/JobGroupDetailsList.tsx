import React from 'react';
import JobGroupDetails from '@components/job-group/components/details/JobGroupDetails';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const JobGroupDetailsList = observer(() => {
    const { store } = useStore();
    const { jobGroupList, setRecruitNoticeOfJobGroup } = store;

    const reorder = (list: any[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const srcJobGroup = source.droppableId;
        const destJobGroup = destination.droppableId;

        if (srcJobGroup === destJobGroup) {
            for (let i = 0; i < jobGroupList.length; i++) {
                const { name, recruitNoticeList } = jobGroupList[i];
                if (name === srcJobGroup) {
                    const list = reorder(recruitNoticeList, source.index, destination.index);
                    setRecruitNoticeOfJobGroup(i, list);
                    break;
                }
            }
        }
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                {jobGroupList.map((jobGroup, i) => (
                    <JobGroupDetails jobGroup={jobGroup} key={jobGroup.name} index={i + 1} />
                ))}
            </DragDropContext>
        </div>
    );
});

export default JobGroupDetailsList;
