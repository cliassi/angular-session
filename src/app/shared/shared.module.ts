import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyCardComponent } from './my-card/my-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [],
  declarations: [MyCardComponent],
  imports: [CommonModule],
  exports: [MyCardComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
