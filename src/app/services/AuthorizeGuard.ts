import {Router, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthorizeService} from "./AuthorizeService";
/**
 * Created by huang on 17-3-11.
 */

@Injectable()
export class AuthorizeGuard implements CanActivate {
    constructor(private authorizeService: AuthorizeService, private router: Router) {}

    canActivate(): boolean {
        if (this.authorizeService.isLogin) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }


}
