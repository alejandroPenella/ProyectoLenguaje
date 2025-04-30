import { Routes } from '@angular/router';
import { ShopComponent } from './componentes/shop/shop.component';
import { HomeComponent } from './componentes/home/home.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { JoinSesionComponent } from './componentes/join-sesion/join-sesion.component';
import { ProductComponent } from './componentes/product/product.component';
import { CommunityComponent } from './componentes/community/community.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { CartComponent } from './componentes/cart/cart.component';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'shop', component: ShopComponent},
{path: 'join', component: JoinSesionComponent},
{path: 'contact', component: ContactComponent},
{path: 'community', component: CommunityComponent},
{path: 'product/:id', component: ProductComponent},
{path: 'cart', component:CartComponent },
{path: '**', component: PageNotFoundComponent}


];
