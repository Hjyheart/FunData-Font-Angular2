/**
 * Created by hongjiayong on 2017/3/9.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class ComContactService{

  sidebarState: string= 'active';

  constructor(){}

  changeSideBarState(){
    if(this.sidebarState === 'inactive'){
      this.sidebarState = 'active';
    }else{
      this.sidebarState = 'inactive';
    }
  }

}