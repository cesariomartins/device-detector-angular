import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService) {
    this.deviceInfo = deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
  }

  get isMobile() {
    return this.deviceService.isMobile();
  }

  get isTablet() {
    return this.deviceService.isTablet();
  }

  get isDesktop() {
    return this.deviceService.isDesktop();
  }

}
