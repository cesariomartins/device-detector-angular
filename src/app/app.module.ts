import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { CheckoutDesktopComponent } from './checkout-desktop/checkout-desktop.component';
import { CheckoutMobileComponent } from './checkout-mobile/checkout-mobile.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutDesktopComponent,
    CheckoutMobileComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
