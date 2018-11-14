import { Component } from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    refresherEnabled: boolean = true;

    constructor() {}

    doClick() {
        this.refresherEnabled = !this.refresherEnabled;
    }
}
