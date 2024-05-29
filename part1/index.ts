function arrayOperations(arr:number[]): number[] {
    // ** Modern, but slow method **
    // return arr
    //     .filter((n:number) => n >= 0)
    //     .map((n:number) => n * 2)
    //     .sort((a: number, b: number) => a - b)


    // ** fast method **
    const filteredMapped:number[] = [];

    for (const n of arr) {
        if (n >= 0) {
            filteredMapped.push(n * 2);
        }
    }

    return filteredMapped.sort((a: number, b: number) => a - b);
}

