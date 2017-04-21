/**
 * Created by huang on 17-4-18.
 */

export class Column {
    public colName: String;
    public colType: String;
    public limits: number[];

    constructor(
      name: string,
      type: string,
      limits: number[]
    ){
        this.colName = name;
        this.colType = type;
        this.limits = limits;
    }
}