import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "../default.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { LoanslistComponent } from "./list/loans-list.component";
import { LoanFormComponent } from "./loan-form/loan-form.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoanResolver } from "./loan-resolver";

import { FormsModule } from "@angular/forms";
import { UsersResolver } from "../users/users-resolver";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LoanslistComponent
            },
            {
                "path": ":id",
                "component": LoanFormComponent,
                resolve: {
                    loan: LoanResolver,
                    users: UsersResolver
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
        LoanResolver,
        UsersResolver
    ],

    exports: [
        RouterModule

    ], declarations: [
        LoanslistComponent,
        LoanFormComponent
    ]
})
export class LoansModule {


}