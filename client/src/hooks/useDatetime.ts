import { Datetime } from '@models/Datetime';
import useNumberFormat from '@hooks/useNumberFormat';

export interface IUseDatetimeParams {
    datetime: Datetime;
}

export interface IUseDatetime {
    /**
     * 0000.00.00 포맷 반환
     */
    datetimeFormat: string;
}

export default function useDatetime(params: IUseDatetimeParams): IUseDatetime {
    const { datetime } = params;
    const { year, month, date } = datetime;
    const { withDigitLength } = useNumberFormat();

    return {
        datetimeFormat: `${withDigitLength(year, 4)}.${withDigitLength(month, 2)}.${withDigitLength(date, 2)}`,
    };
}
