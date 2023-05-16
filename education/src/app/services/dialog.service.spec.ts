import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocAddComponent } from '../modules/docuplus/add-doc/add-doc.component';
import { AddClientComponent } from '../modules/govern-compliance/clients/add-client/add-client.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirmDialog() {
    this.dialog.open(AddClientComponent);
  }

  addDoc() {
    this.dialog.open(DocAddComponent);
  }


}
