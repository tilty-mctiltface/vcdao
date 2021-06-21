import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pool',
  templateUrl: './pool-dialog.component.html',
  styleUrls: ['./pool-dialog.component.scss']
})
export class PoolDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PoolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pool: any
  ) { }

  ngOnInit(): void {
  }

}
