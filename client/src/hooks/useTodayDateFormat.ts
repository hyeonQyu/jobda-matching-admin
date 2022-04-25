import useDatetime from '@hooks/useDatetime';

export interface IUseTodayDate {
    datetimeFormat: string;
}

export default function useTodayDateFormat(): IUseTodayDate {
    const dateObj = new Date();
    const { datetimeFormat } = useDatetime({
        datetime: {
            year: dateObj.getFullYear(),
            month: dateObj.getMonth() + 1,
            date: dateObj.getDate(),
        },
    });

    return { datetimeFormat };
}
