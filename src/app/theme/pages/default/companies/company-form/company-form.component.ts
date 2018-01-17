import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
;
import { CountrySetting } from "../../../../../models/country-setting";
import { CountriesSettingsService } from "../../../../../_services/apis/countries-settings.service";
import { CompaniesService } from "../../../../../_services/apis/company.service";
import { Company } from "../../../../../models/company";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./Company-form.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CompanyFormComponent implements OnInit {
    data: Company;
    countries: any;


    constructor(private api: CompaniesService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.data = this.route.snapshot.data.company as Company;
        this.countries = this.route.snapshot.data.countries;
    }

    onSubmit(mForm: any) {

        if (mForm.valid) {
            console.log(mForm.valid, mForm)
            this.api.save(this.data)
                .subscribe(r => {
                    this.router.navigate(["/Companies"])
                });
        }
    }

}
