class DataFetcher {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async fetchData(): Promise<any> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        } catch (error: any) {
            console.error(`Failed to fetch data: ${error.message}`);
            return null; // Returning null or an appropriate value to indicate the failure
        }
    }

    public processData(data: any): void {
        console.log(`Fetched data: ${JSON.stringify(data)}`);
    }
}

const url = "https://jsonplaceholder.typicode.com/posts/1";
const fetcher = new DataFetcher(url);

(async () => {
    const data = await fetcher.fetchData();

    if (data) {
        fetcher.processData(data);
    }
})();