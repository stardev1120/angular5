import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import { ScriptLoaderService } from "../../../../_services/script-loader.service";
import { ActivatedRoute, Router } from "@angular/router";
// import { Helpers } from '../../../../../../../helpers';
// import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./admin-user-access.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AdminUserAccessComponent implements OnInit, AfterViewInit, OnDestroy {
    user_id: any;
    code: string;
    private sub: any;
    constructor(private _router: Router, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.user_id = params['user_id'];
        })
    }
    ngAfterViewInit() {

    }
    ngOnDestroy() {
        //this.sub.unsubscribe();
    }
    sendRequestAccess() {
        // todo: send request access
        // user_id
    }
    verifyAccess() {
        console.log(this.code)
        // todo verify code and then redirect to user view
        this.user_id = this.code;
        this._router.navigate(['/users/view', 'new']);
    }
}