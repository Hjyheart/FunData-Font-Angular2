import {Column} from "./Column";
/**
 * Created by huang on 17-4-18.
 */

export class Dataset {

    public name: String;
    public ownerName: String;
    public ownerUrl: String;
    private _coverUrl: String;
    public dsDescription: String;
    public formatDescription: String;
    public createTime: String;
    public columns: Column[];

}