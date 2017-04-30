import {Column} from "./Column";
import {Constants} from "../util/Constants";
/**
 * Created by huang on 17-4-18.
 */

export class Dataset {
    set coverUrl(value: string) {
        this._coverUrl = value;
    }
    get coverUrl(): string {
        // console.log(Constants.ServerHost);
        // return `${Constants.ServerHost}/${this._coverUrl}`;
        return '...';
    }

    public id: number;
    public name: string;
    public ownerName: string;
    private _coverUrl: string;
    public dsDescription: string;
    public formatDescription: string;
    public createTime: string;
    public contributeNum: number;
    public columns: Column[];

}