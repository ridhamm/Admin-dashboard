import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DeshboardComponent } from './modules/deshboard/deshboard.component';
import { PostComponent } from './modules/post/post.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { HelpsComponent } from './modules/helps/helps.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { LeadsComponent } from './modules/leads/leads.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path: '',
    component: DeshboardComponent
  },{
    path: 'Settings',
    component: SettingsComponent
  },{
    path: 'Helps',
    component: HelpsComponent
  },{
    path: 'Logout',
    component: LogoutComponent
  },{
    path: 'Posts',
    component: PostComponent
  },{
    path: 'Articles',
    component: ArticlesComponent
  },{
    path: 'Contacts',
    component: ContactsComponent
  },{
    path: 'Leads',
    component: LeadsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
