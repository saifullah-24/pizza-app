import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { FirstComponent } from './first/first.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSelectModule,MatSidenavModule,MatFormFieldModule,MatButtonToggleModule,MatStepperModule,MatTabsModule, MatSortModule,BrowserAnimationsModule, LayoutModule,  MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
