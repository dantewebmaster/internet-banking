import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToasterService {

    constructor(private snackBar: MatSnackBar) {}

    showToaster(msg: string) {
        this.snackBar.open(msg, 'Fechar', {
            duration: 4000,
        });
    }
}