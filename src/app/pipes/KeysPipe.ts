import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by huang on 17-5-13.
 */
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
            keys.push(key);
        }
        return keys;
    }
}
