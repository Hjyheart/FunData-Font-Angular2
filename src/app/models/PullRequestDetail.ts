import {Column} from "./Column";
/**
 * Created by huang on 17-4-30.
 */

export class PullRequestDetail {
    public id: number;
    public columns: Column[];
    public limits: Array<Map<string, boolean>>;
    public url: string;

}