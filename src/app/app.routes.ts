import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { ManageVideosComponent } from './components/manage-videos/manage-videos.component';
import { teacherGuard } from './guards/teacher.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: 'permanent', component: PermanentjobsComponent },
      { path: 'contract', component: ContractjobsComponent },
    ],
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  {
    path: 'videos',
    component: ManageVideosComponent,
    canActivate: [teacherGuard]
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];
