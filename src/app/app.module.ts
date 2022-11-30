import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReteModule } from 'rete-angular-render-plugin';
import { SortablejsModule } from 'ngx-sortablejs';

import { AppComponent } from './app.component';
import { MyNodeComponent } from './node.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNodeComponent,
  ],
  imports: [
    BrowserModule,
    ReteModule,
    SortablejsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
