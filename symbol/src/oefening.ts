const dataKey = Symbol("dataKey");
class HiddenData {
    private [dataKey]: string;
    constructor(data: string) {
        this[dataKey] = data;
    }
    getData(): string {
        return this[dataKey];
    }
    setData(newData: string): void {
        this[dataKey] = newData;
    }
}
const hidden = new HiddenData("Initiële verborgen data");
console.log(hidden.getData());

hidden.setData("Nieuwe verborgen data");
console.log(hidden.getData());  
