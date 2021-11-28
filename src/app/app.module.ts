import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildOneComponent } from './pages/child-one/child-one.component';
import { ChildTwoComponent } from './pages/child-two/child-two.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, ParentComponent, ChildOneComponent, ChildTwoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
