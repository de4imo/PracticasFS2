import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// import {MatDisplayedColumnsModule} from '@angular/material/columns';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
