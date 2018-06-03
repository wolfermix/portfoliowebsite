import {Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {WorkComponent} from "./work/work.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";

export const AppRoute: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'work', component: WorkComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contactme', component: ContactComponent}
]
