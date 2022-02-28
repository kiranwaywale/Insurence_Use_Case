import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { NewPolicyComponent } from './new-policy/new-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ImageCarouselComponent,
    SideBarComponent,
    DashBordComponent,
    PolicyDetailsComponent,
    NewPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
