/**
 * Created by huang on 17-4-18.
 */

export class Column {
    public colName: string;
    public colType: string;

    constructor(
      name: string,
      type: string,
    ){
        this.colName = name;
        this.colType = type;
    }
}