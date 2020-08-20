import { Component, OnInit, OnDestroy, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AddirectiveDirective } from './addirective.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit,OnDestroy {

  @Input() 
  ads: AdItem[];

  currentAdIndex = -1;

  @ViewChild(AddirectiveDirective,{static:true})
  adHost: AddirectiveDirective;

  interval: any;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }


  ngOnDestroy() {
    clearInterval(this.interval);
  }

  

}
