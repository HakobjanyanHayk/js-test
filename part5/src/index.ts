import { castAnyToArray } from "./utils";

export const checkArrLength = (arr: number | number[]): number => {
    const res:number[] = castAnyToArray(arr);

    return res.length;
}