import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BorrowListComponent } from './borrow-list/borrow-list.component';

const routes: Routes = [
  {
    path: 'borrower-detail', children: [
      { path: '', component: BorrowListComponent }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BorrowListComponent]
})
export class BorrowerDetailModule { }
