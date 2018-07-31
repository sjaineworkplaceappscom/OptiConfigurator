import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './common/left/left.component';
import { RightComponent } from './common/right/right.component';
import { TopComponent } from './common/top/top.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';



import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; // Bootstrap Dropdown
import { ModalModule } from 'ngx-bootstrap/modal'; // Bootstrap modal
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; // perfect scroll bar
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule, ExcelModule  } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout'
import { PDFExportModule } from '@progress/kendo-angular-pdf-export'
import { DateInputsModule } from '@progress/kendo-angular-dateinputs'
import { UploadModule } from '@progress/kendo-angular-upload'
import { InputsModule } from '@progress/kendo-angular-inputs';


// for svg icon
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    TopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PerfectScrollbarModule,
    HttpClientModule, 
    AngularSvgIconModule, 
    DropDownsModule, 
    BrowserAnimationsModule, 
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    GridModule,
    LayoutModule,
    TabsModule.forRoot(),
    PDFExportModule,
    ExcelModule,
    DateInputsModule,
    UploadModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
