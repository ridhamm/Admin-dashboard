import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultModule } from './layout/default/default.module';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { LeadsComponent } from './modules/leads/leads.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { HelpsComponent } from './modules/helps/helps.component';
import { LogoutComponent } from './modules/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ArticlesComponent,
    LeadsComponent,
    SettingsComponent,
    HelpsComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
