import {Column} from "./Column";
/**
 * Created by huang on 17-4-18.
 */

export class Table {
    public name: string;
    public columns: Column[];
    constructor(name: string) {
        this.columns = [];
        this.name = name;
    }
}