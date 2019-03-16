import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/components/welcome/welcome.component';
import { WelcomeModule } from './welcome/welcome.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutModule } from './about/about.module';
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './shared/components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './shared/components/site-layout-footer/site-layout-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    DashboardModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
