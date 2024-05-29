type IObject = { name: string; value: number;};

function processData(data: IObject[]): string[] {
    // ** Modern syntax, but slow method **
    // return data
    //     .filter((o:IObject) => o.value < 10)
    //     .map((o:IObject) => o.name)
    //     .sort((a: string, b: string) => a.localeCompare(b))

    const filteredMapped:string[] = [];

    for (const o of data) {
        if (o.value < 10) {
            filteredMapped.push(o.name);
        }
    }

    return filteredMapped.sort((a: string, b: string) => a.localeCompare(b))
}