export interface IUseInputParams {
    value: string | number;
    setValue(value: string);
}

export interface IUseInput {
    value: string | number;
    onChange(e);
}

export default function useInput(params: IUseInputParams): IUseInput {
    const { value, setValue } = params;

    return {
        value: value === 0 ? '' : value,
        onChange(e) {
            setValue(e.target.value);
        },
    };
}
