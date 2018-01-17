import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
;
import { CountrySetting } from "../../../../../models/country-setting";
import { CountriesSettingsService } from "../../../../../_services/apis/countries-settings.service";
import { CompaniesService } from "../../../../../_services/apis/company.service";
import { Company } from "../../../../../models/company";
import { RolesService } from "../../../../../_services/apis/role.service";
import { Role } from "../../../../../models/role";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./role-form.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class RoleFormComponent implements OnInit {
    data: Role;
    countries: any;


    constructor(private api: RolesService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.data = this.route.snapshot.data.role as Role;
    }

    onSubmit(mForm: any) {

        if (mForm.valid) {
            console.log(mForm.valid, mForm)
            this.api.save(this.data)
                .subscribe(r => {
                    this.router.navigate(["/roles"])
                });
        }
    }

}
