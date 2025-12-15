import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { GettingStartedComponent } from './pages/getting-started.component';
import { ConfigurationComponent } from './pages/configuration.component';
import { ExamplesComponent } from './pages/examples.component';
import { ConventionalCommitsComponent } from './pages/conventional-commits.component';
import { ApiReferenceComponent } from './pages/api-reference.component';
import { ContributingComponent } from './pages/contributing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'conventional-commits', component: ConventionalCommitsComponent },
  { path: 'api-reference', component: ApiReferenceComponent },
  { path: 'contributing', component: ContributingComponent },
  { path: '**', redirectTo: '' }
];
