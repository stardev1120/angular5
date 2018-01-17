import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "../default.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { UsersComponent } from "./list/users.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { CountriesResolver } from "../countries/countries-resolver";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserResolver } from "./user-resolver";

import { FormsModule } from "@angular/forms";
import { UsersResolver } from "./users-resolver";
import { AuthGuard } from "../../../../auth/_guards";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": UsersComponent
            },
            {
                "path": ":id",
                "component": UserFormComponent,
                resolve: {
                    user: UserResolver,
                    countries: CountriesResolver,
                }
            },
            {
                "path": "view/:id",
                "component": UserFormComponent,
                "canActivate": [AuthGuard],
                resolve: {
                    user: UserResolver,
                    countries: CountriesResolver,
                }
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    providers: [
        CountriesResolver,
        UserResolver,
        UsersResolver
    ],

    exports: [
        RouterModule

    ], declarations: [
        UsersComponent,
        UserFormComponent
    ]
})
export class UsersListModule {


}