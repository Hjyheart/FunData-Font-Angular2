/**
 * Created by huang on 17-3-9.
 */


export class Constants {
    public static get ServerHost(): string { return 'http://localhost:8080'; };
    //public static get ServerHost(): string { return 'http://192.168.1.18:3000';};
    public static get Restricts(): {} {
        return {
            'Integer' : ['平均值', '方差'],
            'String' : ['最大值', '最小值']};
    };


}
