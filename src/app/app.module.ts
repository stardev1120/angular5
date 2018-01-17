import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HttpClientModule } from '@angular/common/http';
import { ApisModule } from "./_services/apis/apis.module";
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from "./_services/i18n.service";

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,

    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpClientModule,
        ApisModule,
        TranslateModule.forRoot()
    ],
    providers: [
        ScriptLoaderService,
        I18nService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }