/**
 * Created by huang on 17-4-18.
 */

export class Column {
    public colName: string;
    public colType: string;
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