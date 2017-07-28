/**
 * Created by mithun.dk on 7/28/2017.
 */
import { EditsComponent } from './edits.component';
import { DonesComponent } from './dones.component';

import { Routes } from '@angular/router';

export const TODO_SUBROUTES: Routes = [
  {path:'edits/:name',component: EditsComponent},
  {path:'dones',component:DonesComponent}
]

