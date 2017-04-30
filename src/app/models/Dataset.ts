import {Column} from "./Column";
import {Constants} from "../util/Constants";
/**
 * Created by huang on 17-4-18.
 */

export class Dataset {

    public id: number;
    public name: string;
    public ownerName: string;
    public coverUrl: string;
    public dsDescription: string;
    public formatDescription: string;
    public createTime: string;
    public contributeNum: number;
    public columns: Column[];


}