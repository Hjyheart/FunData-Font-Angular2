/**
 * Created by hongjiayong on 2017/4/17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class CurrentPageService {

  currentPage:string;

  constructor(){
    this.currentPage = '';
  }

}

