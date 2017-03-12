/**
 * Created by hongjiayong on 2017/3/9.
 */
import {Component, OnInit, animate, transition, style, state, trigger, Output, EventEmitter} from '@angular/core';
import {AuthorizeService} from "../../services/AuthorizeService";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-bar',
  templateUrl: 'bar.component.html',
  styleUrls: ['../dashboard.component.css'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        display: 'none',
        opacity: '0',
        // transform: 'translateX(-100%)'
      })),
      state('active', style({
        display: 'block',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})

export class BarComponent implements OnInit{

  private siderBarState: string = 'active';

  @Output() siderBarListener = new EventEmitter<boolean>();

  constructor(
    private authorizeService: AuthorizeService,
    private router: Router
  ){

  }

  get isLogin(): Boolean {
    return this.authorizeService.isLogin
  }


  ngOnInit(): void {
  }

  controlSiderBar(){
    if(this.siderBarState === 'inactive'){
      this.siderBarState = 'active';
      this.siderBarListener.emit(true);
    }else{
      this.siderBarState = 'inactive';
      this.siderBarListener.emit(false);
    }
  }

  public logout() {
    this.authorizeService.logout()
      .subscribe((status: String) => {
        if(status==='200') {
          this.router.navigate(['/login'])
        }
      })
  }

}