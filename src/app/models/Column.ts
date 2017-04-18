/**
 * Created by huang on 17-4-18.
 */

export class Column {
    public name: String;
    public type: String;
    public limits: number[];

    constructor(
      name: string,
      type: string,
      limits: number[]
    ){
        this.name = name;
        this.type = type;
        this.limits = limits;
    }
}