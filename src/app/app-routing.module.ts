import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './pages/home/home.component';
import { GBAMComponent } from './pages/gbam/gbam.component';
import { CSWOComponent } from './pages/cswo/cswo.component';

const routes: Routes = [
  { path: 'cswo', component: CSWOComponent },
  { path: 'gbam', component: GBAMComponent },
  { path: '', component: HOMEComponent }, // Default route
  { path: '**', redirectTo: '' }, // Redirect to cswo if the route doesn't match any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
