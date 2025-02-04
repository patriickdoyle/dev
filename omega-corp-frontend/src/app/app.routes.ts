import { Routes } from '@angular/router'
import { AboutUsComponent } from './about-us/about-us.component'
import { ContactUsComponent } from './contact-us/contact-us.component'

export const routes: Routes = [
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: '', redirectTo: '/about-us', pathMatch: 'full' }
]
